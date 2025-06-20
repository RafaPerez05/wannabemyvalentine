import Envelope from './components/Envelope';
import './Yes.css';

const Yes = () => {
  // Gifts inside the envelopes
  const messages = [
    'Vamos comer HAMBUGUER!.',
    'Te compro o vestido que você escolher.',
    'Vou fazer uma janta com três pratos.',
  ];

  const envelopes = messages.map((message, index) => (
    <div key={index} className="flex flex-col items-center">
      <Envelope id={index}>{message}</Envelope>
      <p className="text-slate-100 mb-2 text-2xl">
        {['Hoje', 'Quando você quiser', 'Romantic time!'][index]}
      </p>
    </div>
  ));
  return (
    <>
      <div className="bg-red-950 w-screen flex flex-col justify-center">
        <div className="bg-black pt-14 pb-11 mx-4 md:mx-24 md:my-20 my-10 rounded-3xl shadow-2xl opacity-70 shadow-red-600">
          <div>
            <h1 className="text-slate-100 md:text-5xl text-3xl text-center red-shadow">
              Feliz 10 meses meu amor ❤️
            </h1>
            <p className="text-slate-100 text-center mt-10 text-xl ">
              Obrigado por ser a companhia e melhor pessoa que esteve comigo nesses ultimos meses, te amo demais, te amarei pra sempre! Aqui vai tres presentes pra você usar
            </p>
          </div>
          <div className="envelopes-container flex justify-center flex-col xl:flex-row gap-4 mt-4">
            {envelopes}
          </div>
        </div>
      </div>
    </>
  );
};
export default Yes;
