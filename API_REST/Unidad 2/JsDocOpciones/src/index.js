/**
 * Módulo: Alumno
 * Descripción: Funciones relacionadas con los alumnos
 */

// Función para obtener el nombre de un alumno por su número de identificación

/**
 * Obtiene el nombre mediante el id de alumno
 * @param {number} id - El ID del alumno del cual se desea obtener el nombre
 * @returns {string} El nombre del alumno
 */
function obtenerNombrePorId(id) {
  return "José Alfredo López Cervantes";
}

/**
 * Obtiene la edad mediante el id de alumno
 * @param {number} id - El ID del alumno del cual se desea obtener la edad
 * @returns {number} La edad del alumno
 */
function obtenerEdadPorId(id) {
  return 25;
}

/**
 * Exporta el módulo
 */
module.exports = {
  obtenerNombrePorId,
  obtenerEdadPorId
};
