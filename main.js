 function showModule(module) {
            // Ocultar todos los módulos
            document.getElementById('cargues-module').classList.add('hidden');
            document.getElementById('productos-module').classList.add('hidden');
            document.getElementById('usuarios-module').classList.add('hidden');

            // Remover clase activa de todos los elementos del sidebar
            document.querySelectorAll('.sidebar-item').forEach(item => {
                item.classList.remove('active');
            });

            // Mostrar el módulo seleccionado y activar elemento del sidebar
            if (module === 'cargues') {
                document.getElementById('cargues-module').classList.remove('hidden');
                document.querySelector('[onclick="showModule(\'cargues\')"]').classList.add('active');
            } else if (module === 'productos') {
                document.getElementById('productos-module').classList.remove('hidden');
                document.querySelector('[onclick="showModule(\'productos\')"]').classList.add('active');
            } else if (module === 'usuarios') {
                document.getElementById('usuarios-module').classList.remove('hidden');
                document.querySelector('[onclick="showModule(\'usuarios\')"]').classList.add('active');
            }
        }

        function openModal() {
            document.getElementById('uploadModal').classList.add('show');
        }

        function closeModal() {
            document.getElementById('uploadModal').classList.remove('show');
            resetForm();
        }

        function openInstructionsModal() {
            document.getElementById('instructionsModal').classList.add('show');
        }

        function closeInstructionsModal() {
            document.getElementById('instructionsModal').classList.remove('show');
        }

        function resetForm() {
            document.getElementById('uploadForm').reset();
            document.getElementById('fileName').textContent = 'El archivo es requerido';
            hideErrors();
        }

        function hideErrors() {
            const errors = document.querySelectorAll('.error-message');
            errors.forEach(error => error.style.display = 'none');
        }

        function showError(fieldId, message) {
            const errorElement = document.getElementById(fieldId + 'Error');
            if (errorElement) {
                errorElement.textContent = message;
                errorElement.style.display = 'block';
            }
        }

        function handleFileSelect(input) {
            const file = input.files[0];
            if (file) {
                document.getElementById('fileName').textContent = file.name;
                document.getElementById('archivoError').style.display = 'none';
            }
        }

        function processFile() {
            hideErrors();
            let hasErrors = false;

            // Validar categoría
            const categoria = document.getElementById('categoria').value;
            if (!categoria) {
                showError('categoria', 'Este campo es requerido');
                hasErrors = true;
            }

            // Validar acción
            const accion = document.getElementById('accion').value;
            if (!accion) {
                showError('accion', 'Este campo es requerido');
                hasErrors = true;
            }

            // Validar archivo
            const archivo = document.getElementById('fileInput').files[0];
            if (!archivo) {
                showError('archivo', 'Debe seleccionar un archivo');
                hasErrors = true;
            }

            if (!hasErrors) {
                // Simular procesamiento
                alert('Archivo procesado correctamente. Fecha: ' + new Date().toLocaleDateString('es-ES'));
                closeModal();
            }
        }

        // Cerrar modal al hacer click fuera de él
        window.onclick = function (event) {
            const uploadModal = document.getElementById('uploadModal');
            const instructionsModal = document.getElementById('instructionsModal');

            if (event.target === uploadModal) {
                closeModal();
            }
            if (event.target === instructionsModal) {
                closeInstructionsModal();
            }
        }