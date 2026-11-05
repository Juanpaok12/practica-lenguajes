SELECT nombre, ciudad FROM clientes WHERE ciudad = 'Bogotá';
INSERT INTO clientes (nombre, ciudad) VALUES ('Juan', 'Barranquilla');

SELECT pedidos.producto, clientes.nombre
FROM pedidos
JOIN clientes ON pedidos.cliente_id = clientes.id;