"use client";
import { motion } from "framer-motion";  // IMPORTA CORRECTAMENTE motion
import Image from "next/image";
import Link from "next/link";  // Importa Link de next

const Profe1 = () => {
  return (
    <motion.section
      className="w-full py-20 px-6 md:px-20 bg-gradient-to-br from-[#f8fafc] via-[#f1f5f9] to-[#e2e8f0]"
      initial="visible"
      animate={{ opacity: 1, y: 0 }}  // Asegura que el contenido esté visible inmediatamente
      transition={{ duration: 0.6 }}
    >
      {/* Sección de información */}
      <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-[#4a90e2] to-[#357abd] text-transparent bg-clip-text">
        Dr. Jonathan Suarez De Los Ríos
      </h2>

      <div className="max-w-4xl mx-auto text-center">
        {/* Foto del profesional */}
        <div className="w-full lg:w-1/2 mx-auto mb-6">
          <Image
            src="/profesionales/doc1.jpg"
            alt="Dr. Jonathan Suarez De Los Ríos"
            width={500}
            height={500}
            className="rounded-full mx-auto shadow-lg"
          />
        </div>

        {/* Descripción y detalles */}
        <p className="text-lg text-[#334155] mb-4">
          Licenciado en Odontología Universidad Católica Boliviana San Pablo
        </p>
        <p className="text-lg text-[#334155] mb-4">
          Diplomado en Implantología CEPODO 
        </p>
        <p className="text-lg text-[#334155] mb-4">
          Diplomado en Rehabilitación Oral UNT Perú
        </p>
        <p className="text-lg text-[#334155] mb-4">
          Diplomado en Educación Superior EMI
        </p>
        <p className="text-lg text-[#334155] mb-4">
          Especialidad en Ortodoncia Universidad Católica Boliviana San Pablo
        </p>
      </div>

      {/* Botón para regresar a la lista de profesionales */}
      <div className="text-center mt-8">
        
        <Link
          href="/#"
          className="inline-block bg-[#4a90e2] text-white font-semibold px-6 py-3 rounded-full shadow-md hover:bg-[#357abd] transition duration-300"
        >
          Regresar al inicio
        </Link>
      </div>
    </motion.section>
  );
};

export default Profe1;
