const Footer = () => {
  return (
    <>
      <footer className="bg-gray-900 text-white py-8">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h1 className="text-2xl font-bold text-center mb-4">Natarajan M</h1>
    <p className="text-center mb-8">
      I am Natarajan, and this is my personal website, consult me here.
    </p>
    <div className="flex justify-center space-x-6 mb-8">
      <a 
        href="www.linkedin.com/in/natarajan-m-817622254"
        className="text-gray-400 hover:text-white">
        <i className="bx bxl-linkedin text-2xl"></i>
      </a>
      <a 
        href="https://github.com/natarajanmayi"
        className="text-gray-400 hover:text-white">
        <i className="bx bxl-github text-2xl"></i>
      </a>
    </div>
    <p className="text-center text-gray-400">
      &#169; 2024 Natarajan. All rights reserved.
    </p>
  </div>
</footer>

    </>
  );
};

export default Footer;
