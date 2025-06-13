import React from 'react';

const Privacidad = () => {
  
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Política de Privacidad
          </h1>
          <p className="text-gray-600">
            Última actualización: {new Date().toLocaleDateString('es-ES')}
          </p>
        </div>

        {/* Contenido */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          
          {/* Introducción */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              1. Introducción
            </h2>
            <p className="text-gray-600 leading-relaxed">
              En Campuseats, valoramos y respetamos tu privacidad. Esta Política de Privacidad 
              describe cómo recopilamos, utilizamos y protegemos tu información personal cuando utilizas 
              nuestros servicios de pedidos en línea.
            </p>
          </section>

          {/* Información que recopilamos */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              2. Información que Recopilamos
            </h2>
            <div className="text-gray-600 leading-relaxed space-y-3">
              <p><strong>Información personal:</strong></p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Nombre completo</li>
                <li>Número de teléfono</li>
                <li>Dirección de entrega</li>
                <li>Información de pago (procesada de forma segura)</li>
              </ul>
              
              <p><strong>Información del pedido:</strong></p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Historial de pedidos</li>
                <li>Preferencias alimentarias</li>
                <li>Comentarios especiales</li>
              </ul>
            </div>
          </section>

          {/* Cómo utilizamos la información */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              3. Cómo Utilizamos tu Información
            </h2>
            <div className="text-gray-600 leading-relaxed">
              <p className="mb-3">Utilizamos tu información para:</p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Procesar y entregar tus pedidos</li>
                <li>Comunicarnos contigo sobre el estado de tu pedido</li>
                <li>Mejorar nuestros servicios y experiencia del usuario</li>
                <li>Enviar promociones y ofertas especiales (solo si das tu consentimiento)</li>
                <li>Cumplir con obligaciones legales</li>
              </ul>
            </div>
          </section>

          {/* Protección de datos */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              4. Protección de tus Datos
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Implementamos medidas de seguridad técnicas y organizativas apropiadas para proteger 
              tu información personal contra acceso no autorizado, alteración, divulgación o destrucción. 
              Toda la información de pago se procesa a través de plataformas seguras y encriptadas.
            </p>
          </section>

          {/* Compartir información */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              5. Compartir tu Información
            </h2>
            <div className="text-gray-600 leading-relaxed">
              <p className="mb-3">No vendemos, alquilamos o compartimos tu información personal con terceros, excepto:</p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Con proveedores de servicios de entrega para completar tu pedido</li>
                <li>Con procesadores de pago para transacciones seguras</li>
                <li>Cuando sea requerido por ley o autoridades competentes</li>
                <li>Con tu consentimiento explícito</li>
              </ul>
            </div>
          </section>

          {/* Tus derechos */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              6. Tus Derechos
            </h2>
            <div className="text-gray-600 leading-relaxed">
              <p className="mb-3">Tienes derecho a:</p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Acceder a tu información personal</li>
                <li>Rectificar datos incorrectos o incompletos</li>
                <li>Solicitar la eliminación de tus datos</li>
                <li>Oponerte al procesamiento de tus datos</li>
                <li>Retirar tu consentimiento en cualquier momento</li>
              </ul>
            </div>
          </section>

          {/* Cookies */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              7. Cookies y Tecnologías Similares
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Utilizamos cookies y tecnologías similares para mejorar tu experiencia en nuestro sitio web, 
              recordar tus preferencias y analizar el uso del sitio. Puedes configurar tu navegador para 
              rechazar cookies, aunque esto puede afectar la funcionalidad del sitio.
            </p>
          </section>

          {/* Contacto */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              8. Contacto
            </h2>
            <div className="text-gray-600 leading-relaxed">
              <p className="mb-3">
                Si tienes preguntas sobre esta Política de Privacidad o sobre el manejo de tus datos personales, 
                puedes contactarnos:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p><strong>Email:</strong> privacidad@campuseats.com</p>
                <p><strong>Teléfono:</strong> +52 871109474</p>
              </div>
            </div>
          </section>

          {/* Cambios en la política */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              9. Cambios en esta Política
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Nos reservamos el derecho de actualizar esta Política de Privacidad en cualquier momento. 
              Los cambios importantes serán notificados a través de nuestro sitio web o por email. 
              Te recomendamos revisar esta página periódicamente.
            </p>
          </section>

        </div>

        {/* Botón de regreso */}
     <button
  onClick={() => window.location.href = '/'}
  className="text-gray-300 hover:text-orange-400 bg-transparent border-none cursor-pointer"
>
  Volver al inicio
</button>
      </div>
    </div>
  );
}

export default Privacidad;