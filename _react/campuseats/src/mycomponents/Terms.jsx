import React from 'react';


const Terms = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Términos y Condiciones
          </h1>
          <p className="text-gray-600">
            Última actualización: {new Date().toLocaleDateString('es-ES')}
          </p>
        </div>

        {/* Contenido */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          
          {/* Aceptación de términos */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              1. Aceptación de Términos
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Al utilizar nuestro servicio de pedidos en línea, usted acepta estar sujeto a estos 
              Términos y Condiciones. Si no está de acuerdo con alguna parte de estos términos, 
              no debe utilizar nuestros servicios.
            </p>
          </section>

          {/* Descripción del servicio */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              2. Descripción del Servicio
            </h2>
            <div className="text-gray-600 leading-relaxed space-y-3">
              <p>
                Campuseats ofrece un servicio de pedidos de comida en línea que permite:
              </p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Realizar pedidos de comida para entrega a domicilio</li>
                <li>Seleccionar productos de nuestro menú disponible</li>
                <li>Procesar pagos de forma segura</li>
                <li>Rastrear el estado de su pedido</li>
              </ul>
            </div>
          </section>

          {/* Proceso de pedidos */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              3. Proceso de Pedidos
            </h2>
            <div className="text-gray-600 leading-relaxed space-y-3">
              <p><strong>Realización del pedido:</strong></p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Todos los pedidos están sujetos a disponibilidad</li>
                <li>Los precios pueden cambiar sin previo aviso</li>
                <li>Nos reservamos el derecho de rechazar cualquier pedido</li>
                <li>La confirmación del pedido se enviará por mensaje o llamada</li>
              </ul>
              
              <p><strong>Tiempos de entrega:</strong></p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Los tiempos estimados son aproximados y pueden variar</li>
                <li>No nos hacemos responsables por retrasos debido a circunstancias externas</li>
                <li>El tiempo de entrega comienza a contar desde la confirmación del pedido</li>
              </ul>
            </div>
          </section>

          {/* Precios y pagos */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              4. Precios y Pagos
            </h2>
            <div className="text-gray-600 leading-relaxed space-y-3">
              <p><strong>Precios:</strong></p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Todos los precios están en pesos mexicanos (MXN)</li>
                <li>Los precios incluyen impuestos aplicables</li>
                <li>Se aplicará una tarifa de servicio del 6% sobre el subtotal</li>
                <li>Pueden aplicarse cargos adicionales por entrega según la zona</li>
              </ul>
              
              <p><strong>Métodos de pago:</strong></p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Efectivo al momento de la entrega</li>
                <li>Transferencia bancaria</li>
                <li>Tarjetas de débito y crédito (sujeto a disponibilidad)</li>
                <li>El pago debe realizarse al momento de la entrega</li>
              </ul>
            </div>
          </section>

          {/* Cancelaciones y reembolsos */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              5. Cancelaciones y Reembolsos
            </h2>
            <div className="text-gray-600 leading-relaxed space-y-3">
              <p><strong>Cancelaciones:</strong></p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Puede cancelar su pedido hasta 5 minutos después de confirmado</li>
                <li>Cancelaciones posteriores están sujetas a evaluación</li>
                <li>Para cancelar, contacte inmediatamente al número proporcionado</li>
              </ul>
              
              <p><strong>Reembolsos:</strong></p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Los reembolsos se procesan solo en casos justificados</li>
                <li>Problemas con la calidad de los alimentos serán evaluados caso por caso</li>
                <li>Los reembolsos pueden tomar de 3 a 5 días hábiles</li>
              </ul>
            </div>
          </section>

          {/* Responsabilidades del cliente */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              6. Responsabilidades del Cliente
            </h2>
            <div className="text-gray-600 leading-relaxed">
              <p className="mb-3">Como cliente, usted se compromete a:</p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Proporcionar información de contacto y dirección precisas</li>
                <li>Estar disponible para recibir el pedido en el horario acordado</li>
                <li>Verificar el pedido al momento de la entrega</li>
                <li>Reportar cualquier problema inmediatamente</li>
                <li>Tratar al personal de entrega con respeto</li>
                <li>No utilizar el servicio para actividades ilegales</li>
              </ul>
            </div>
          </section>

          {/* Limitación de responsabilidad */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              7. Limitación de Responsabilidad
            </h2>
            <div className="text-gray-600 leading-relaxed space-y-3">
              <p>
                Campuseats no será responsable por:
              </p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Retrasos en la entrega debido a condiciones climáticas adversas</li>
                <li>Problemas de acceso al domicilio de entrega</li>
                <li>Daños indirectos o consecuenciales</li>
                <li>Interrupciones del servicio por mantenimiento o fuerza mayor</li>
                <li>Problemas técnicos con plataformas de pago de terceros</li>
              </ul>
            </div>
          </section>

          {/* Alergias y restricciones alimentarias */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              8. Alergias y Restricciones Alimentarias
            </h2>
            <div className="text-gray-600 leading-relaxed space-y-3">
              <p>
                <strong>Importante:</strong> Es responsabilidad del cliente informar sobre cualquier 
                alergia o restricción alimentaria al momento del pedido.
              </p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Incluya información detallada sobre alergias en las notas del pedido</li>
                <li>Nuestros alimentos pueden contener trazas de alérgenos comunes</li>
                <li>No garantizamos ambientes 100% libres de alérgenos</li>
                <li>Consulte con nuestro personal sobre ingredientes específicos</li>
              </ul>
            </div>
          </section>

          {/* Propiedad intelectual */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              9. Propiedad Intelectual
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Todo el contenido de nuestro sitio web y aplicación, incluyendo textos, imágenes, 
              logotipos, y diseños, es propiedad de [Nombre de tu Restaurante] y está protegido 
              por las leyes de propiedad intelectual. Queda prohibida su reproducción sin autorización.
            </p>
          </section>

          {/* Modificaciones */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              10. Modificaciones de los Términos
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Nos reservamos el derecho de modificar estos términos en cualquier momento. 
              Los cambios serán efectivos inmediatamente después de su publicación en nuestro 
              sitio web. El uso continuado del servicio constituye la aceptación de los términos modificados.
            </p>
          </section>

          {/* Jurisdicción */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              11. Jurisdicción y Ley Aplicable
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Estos términos se rigen por las leyes de México. Cualquier disputa será resuelta 
              en los tribunales competentes de [Tu Ciudad, Estado], México.
            </p>
          </section>

          {/* Contacto */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              12. Información de Contacto
            </h2>
            <div className="text-gray-600 leading-relaxed">
              <p className="mb-3">
                Para preguntas sobre estos Términos y Condiciones, puede contactarnos:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p><strong>Email:</strong> info@campuseats.com</p>
                <p><strong>Teléfono:</strong> +52 8711089474</p>
                <p><strong>Horario de atención:</strong> Lunes a Domingo, 9:00 AM - 10:00 PM</p>
              </div>
            </div>
          </section>

        </div>

      </div>  
      
    </div>
  );
}

export default Terms;