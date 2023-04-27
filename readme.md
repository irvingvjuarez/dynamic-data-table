# Ejercicio de código
Ejercicio de código desarrollado por https://www.koibanx.com/

### Descripción del problema
- Se debe contruir una barra de búsqueda para una tabla que muestra datos de comercios
- La tabla es la siguiente:

|ID|Comercio|CUIT|Concepto 1|Concepto 2|Concepto 3|Balance actual|Activo|Ultima venta|
|--|--------|----|----------|----------|----------|--------------|------|------------|
| | | | | | | | | |

- Los tipos de datos son los siguientes:
    - ID [string]
    - Comercio [string]
    - CUIT [string]
    - Concepto 1 al 3 [number]
    - Balance actual [number]
    - Activo [boolean]
    - Ultima venta [Date DD/MM/YYY]
- La primera fila indica como se llaman los campos
- La url base de la api que muestra los datos es: https://restdb.io/docs/querying-with-the-api#restdb.
- Esta api no existe realmente, es anecdótica. El ejercicio simula que su compañero backend está trabajando en ese endpoint
- La API trabaja con la siguiente especificación en cuanto a los parámetros: https://restdb.io/docs/querying-with-the-api#restdb. Tomar eso como guía.
- La base de datos cuenta con información de 10 millones de comercios
- No se requiere autenticación para el trabajo con la api
- La tabla recibe de la api siempre la siguiente respuesta (los valores son de ejemplo)
```js
{
    data: [...], // lista de comercios
    page: 1,
    pages: 1000000,
    rowsPerPage: 10,
    total: 1000000
}
```

### Requerimientos
- Se necesita una barra de búsqueda que hable con la api para poder filtrar la información de manera útil para el usuario y se la pasa a la tabla
    - Se necesita poder filtrar la información por ID y/o CUIT y/o Nombre del comercio. Ya sea porque es exacto como parecido a. Ejemplo: "34" puede buscar al ID 34 o 340, al CUIT 30-3454... o al comercio "pancho 34". (Tip: lo importante es cómo se forman los query params, la búsqueda la realiza la api, no el front)
    - Se necesita poder filtrar por activos o no activos
    - Se necesita poder combinar todos los filtros anteriores
- La tabla debe permitir order las columnas Comercios y Cuit
- No hace falta construir ni traer la data, el código deberá simular que recibe datos como una especie de mock
- No se requiere que se recargue visualmente el ejercicio, con un diseño estándar alcanza. No forma parte de la evaluación lo lindo que se ve, sino más bien la funcionalidad pero deberá ser lo más limpio posible. (si se desea puede utilizar una libreria de UI)
- Para poder ver las urls generadas, las mismas deberán imprimirse por consola
- Tener en cuenta que la tabal indica rows per page y current page. La tabla debe estar paginada
- Tener en cuenta que en el día de mañana la tabla puede ser utilizada para mostrar todas las transacciones de los comercios o datos adicionales en comercios.

### Consideraciones
- El ejercicio debe ser resuelto en React (create-react-app o similares pueden ser utilizadas)
- El diseño de la solución es libre
- La tabla no puede ser un componente de una librería UI
- Se puede emular el servicio de la API, pero no es necesario
- Podrá usar hooks, pero no es obligatorio
- Podrá usar Redux o similares, pero no es obligatorio

### Bonus Track
- Pruebas unitarias a los componentes
- Deploy en algún servicio (AWS, vercel, GCP, Digital Ocean, etc)