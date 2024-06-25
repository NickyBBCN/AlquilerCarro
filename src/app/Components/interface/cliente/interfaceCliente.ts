export interface respuestaclienteAPI {
  isSuccessful: boolean;
  responseCode: number;
  message: string;
  responseDate: string;
  data: infoCliente;
}

export interface infoCliente {
  cliente: Cliente;
  clientes: Cliente[];
  inconsistencias: Inconsistencia[];
}

export interface Inconsistencia {
  mensaje: string;
  propiedad: string;
}

export interface Cliente {
  cedula: string,
  nombre: string,
  fechaAlquiler: string,
  tiempoAlquilado: string,
  placa: string,
  marca: string
}

