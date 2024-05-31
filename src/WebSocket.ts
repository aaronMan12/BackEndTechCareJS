import {
    WebSocketGateway,
    WebSocketServer,
    SubscribeMessage,
    MessageBody,
    ConnectedSocket,
    OnGatewayConnection,
    OnGatewayDisconnect
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

interface ClientData {
    socket: Socket;
    roll: string;
}

@WebSocketGateway({
    cors: {
        origin: '*',
    },
})
export class WebSocket implements OnGatewayConnection, OnGatewayDisconnect {

    private clients: Map<string, ClientData> = new Map();

    @WebSocketServer()
    server: Server;

    handleConnection(client: Socket) {
        //console.log(`Cliente conectado: ${client.id}`);
        this.clients.set(client.id, { socket: client, roll: 'guest' });
    }

    handleDisconnect(client: Socket) {
        //console.log(`Cliente desconectado: ${client.id}`);
        this.clients.delete(client.id);
    }

    @SubscribeMessage('setRole')
    handleSetRole(client: Socket, roll: string) {
        const clientData = this.clients.get(client.id);
        if (clientData) {
            clientData.roll = roll;
            //console.log(`Client ${client.id} set role to ${roll}`);
        }
    }

    @SubscribeMessage('message')
    handleMessage(client: Socket, payload: { body: string, user: string }) {
        const clientData = this.clients.get(client.id);
        if (!clientData) {
            return;
        }

        const message = { body: payload.body, user: payload.user };

        if (clientData.roll === 'admin') {
            this.server.emit('message', message);
        } else if (clientData.roll === 'tecnico') {
            this.clients.forEach((data) => {
                if (data.roll === 'admin') {
                    data.socket.emit('message', message);
                }
            });
        }
    }
}
