# Api de zeto

Esta api devuelve informacion relacionada con factorio (por que ? porque si :D) 

## Funcionamiento (segun lo que entiendo)

el usario hace un pedido por ejemplo en este caso '/minerales' y la api devuelve texto plano o en el caso de que se haga
un pedido que no existe devuelve una imagen con un error404 (img robada shhh)

# Endpoints

## GET (todos estos son metodos GET)

### Pagina inicial

 -**Ruta**: `/`

### Pagina minerales

-**Ruta**:`/minerales`

### Pagina ciencias

-**Ruta**:`/ciencias`

### Error 404

-**Ruta**:`*`
-**Funcion**: en caso de que se haga un pedido a una ruta no existente

## Instalacion

1. Clona el repositorio: 
   
    git clone https://github.com/ElZeto/backend.git
    
2.  selecionar carpeta y instalar dependencias:

    cd backend
    npm install

3. Comando para ejecutar la API:

    npm run dev
 