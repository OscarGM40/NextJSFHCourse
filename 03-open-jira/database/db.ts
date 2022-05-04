import mongoose from 'mongoose';

/** Estados de la conexion en mongoose
 * 0 = disconnected
 * 1 = connected
 * 2 = connecting
 * 3 = disconnecting
 */
const mongoConnection = {
  isConnected: 0,
};

export const connect = async () => {
  if (mongoConnection.isConnected) {
    return console.log('Ya estas conectado');
  }
  if (mongoose.connections.length > 0) {
    mongoConnection.isConnected = mongoose.connections[0].readyState;
    if (mongoConnection.isConnected === 1) {
      return console.log('Usando conexión anterior');
    }
    await mongoose.disconnect();
  }

  try {
    await mongoose.connect(process.env.MONGO_URL || '');
    mongoConnection.isConnected = 1;
    console.log('Conectado a mongoDB:', mongoose.connection.name);
  } catch (error) {
    console.log(error);
  }
};

export const disconnect = async () => {
  if (mongoConnection.isConnected === 0) return;
  await mongoose.disconnect();
  console.log('Desconectado de MongoDB');
};
