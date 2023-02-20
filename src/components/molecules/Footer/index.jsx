export const Footer = () => {
  return (
    <footer className="py-[30px] px-4 bg-black">
      <div>
        <ul className="text-sm flex flex-wrap items-center justify-center">
          <li className="text-white">Iniciar sesión</li>
          <div className="w-[1px] h-4 bg-white mx-2" />
          <li className="text-white">Registrarme</li>
          <div className="w-[1px] h-4 bg-white mx-2" />
          <li className="text-white">Preguntas frecuentes</li>
          <li className="text-white">Terminos y condiciones</li>
        </ul>
      </div>
      <div className="flex justify-center gap-4 my-6">
        <img
          src="/icons/whatsapp.svg"
          alt="Whatsapp icon"
          className="w-8 h-8"
        />
        <img
          src="/icons/facebook.svg"
          alt="Facebook icon"
          className="w-8 h-8"
        />
        <img
          src="/icons/instagram.svg"
          alt="Instagram icon"
          className="w-8 h-8"
        />
      </div>
      <div>
        <p className="text-center text-white text-sm">
          DIRECCIÓN: CALLE 48 #57 - 87. EDIFICIO OASIS DE LA MODA. ESCRÍBENOS A
          SERVICIOALCLIENTE@JEANSPREMIUM.COM © JEANS PREMIUM 2020 - TODOS LOS
          DERECHOS RESERVADOS
        </p>
      </div>
    </footer>
  );
};
