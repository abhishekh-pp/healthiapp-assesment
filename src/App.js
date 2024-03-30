import logo from "./logo.svg";
import "./App.css";
import logo1 from "./theBlur.io.png";
import logo2 from "./logo.svg";
import hero from "./assets/image.jpg";
import img1 from "./assets/img1.webp";
import img2 from "./assets/img2.webp";
import img3 from "./assets/img3.webp";
import img4 from "./assets/img4.webp";
import img5 from "./assets/img5.webp";
import img6 from "./assets/img6.webp";
import img7 from "./assets/img7.webp";
import img8 from "./assets/img8.webp";
import img9 from "./assets/img9.webp";
import img10 from "./assets/img10.webp";
import img11 from "./assets/img11.webp";
import img12 from "./assets/img12.webp";
import img13 from "./assets/img13.png";
import img14 from "./assets/img14.png";

function App() {
  return (
    <>
      <section className="bg-gray-100 h-screen flex items-center justify-center px-20">
        <div className="container mx-auto px-4 py-8 flex items-center justify-center px-20">
          {/* Video Section */}
          <div className="w-1/2 mr-8 ">
            <img
              className="w-full h-full object-cover rounded-3xl"
              src={hero}
              alt="Health Image"
            />
          </div>
          {/* Content Section */}
          <div className="w-1/2 px-12">
            <h1 className="text-4xl font-bold mb-4">
              Lose weight the Healthi way
            </h1>
            <p className="text-lg mb-4">
              6 Science Based plans, the easiest to use app, and a supportive
              community - reach your goals and transform your health.
            </p>
            <button className="bg-blue-800 text-white py-2 px-4 rounded-xl mb-4">
              Get Started for free
            </button>
            <div className="mb-4">
              <h2 className="text-lg font-bold mb-2">Featured In:</h2>
              <div className="flex">
                {/* Logos for featured in section */}
                <img src={logo2} alt="Logo 1" className="w-16 h-16 mr-4" />
                <img src={logo2} alt="Logo 2" className="w-16 h-16 mr-4" />
                <img src={logo2} alt="Logo 3" className="w-16 h-16 mr-4" />
                {/* Add more logo images as required */}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-100 h-screen flex flex-col items-center justify-center">
        <div className="container mx-auto ">
          <h2 className="text-3xl font-bold mb-8 text-center">
            6 weight loss plans. 1 is perfect for you.
          </h2>

          {/* First row of features */}
          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="bg-white p-6 rounded-lg shadow">
                <img
                  src={img1}
                  alt="Feature 1"
                  className="w-full mb-4 rounded-lg"
                />
                <h3 className="text-lg mb-2">For those who:</h3>
                <ul className="list-disc ml-6">
                  <li>Habitually consume processed carbs</li>
                  <li>Crave bread, pasta, cereal, or chips</li>
                </ul>
              </div>
            </div>

            {/* Second feature */}
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="bg-white p-6 rounded-lg shadow">
                <img
                  src={img2}
                  alt="Feature 2"
                  className="w-full mb-4 rounded-lg"
                />
                <h3 className="text-lg mb-2">For those who:</h3>
                <ul className="list-disc ml-6">
                  <li>Crave sweets after dinner</li>
                  <li>Finish a bag of salty snacks in one sitting</li>
                  <li>Overindulge in a specific type of food</li>
                </ul>
              </div>
            </div>

            {/* Third feature */}
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="bg-white p-6 rounded-lg shadow">
                <img
                  src={img3}
                  alt="Feature 3"
                  className="w-full mb-4 rounded-lg"
                />
                <h3 className="text-lg mb-2">For those who:</h3>
                <ul className="list-disc ml-6">
                  <li>Eat fast food 2x or more per week</li>
                  <li>Compulsively overeat sweets</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Second row of features */}
          <div className="flex flex-wrap -mx-4">
            {/* Fourth feature */}
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="bg-white p-6 rounded-lg shadow">
                <img
                  src={img4}
                  alt="Feature 4"
                  className="w-full mb-4 rounded-lg"
                />
                <h3 className="text-lg mb-2">For those who:</h3>
                <ul className="list-disc ml-6">
                  <li>Habitually consume processed meals</li>
                  <li>Need a flexible plan less reliant on tracking</li>
                  <li>Are seeking a healthier relationship with food</li>
                </ul>
              </div>
            </div>

            {/* Fifth feature */}
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="bg-white p-6 rounded-lg shadow">
                <img
                  src={img5}
                  alt="Feature 5"
                  className="w-full mb-4 rounded-lg"
                />
                <h3 className="text-lg mb-2">For those who:</h3>
                <ul className="list-disc ml-6">
                  <li>Already eat healthy, but need help eating less</li>
                  <li>Are number oriented</li>
                  <li>
                    Are seeking a straightforward weight loss method with clear
                    parameters
                  </li>
                </ul>
              </div>
            </div>

            {/* Sixth feature */}
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="bg-white p-6 rounded-lg shadow">
                <img
                  src={img6}
                  alt="Feature 6"
                  className="w-full mb-4 rounded-lg"
                />
                <h3 className="text-lg mb-2">For those who:</h3>
                <ul className="list-disc ml-6">
                  <li>Feel deprived on other diets</li>
                  <li>Prefer protein rich fatty foods over carbs</li>
                  <li>
                    Have tried other weight loss methods and had little success
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-8">
          <button className="bg-blue-900 text-white py-2 px-4 rounded-lg">
            Sign up to your free plan
          </button>
        </div>
      </section>

      <section className="bg-gray-200 py-12 px-28">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Healthi lifestyle
          </h2>

          {/* Three column layout */}
          <div className="flex flex-wrap -mx-4">
            {/* First column */}
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="bg-white p-6 rounded-lg shadow">
                <img
                  src={img7}
                  alt="Image 1"
                  className="w-full mb-4 rounded-lg"
                />
                <p className="text-md">
                  Studies show that 88% of people who track their food
                  consistently, see weight loss results in just 7 days!
                </p>
              </div>
            </div>

            {/* Second column */}
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="bg-white p-6 rounded-lg shadow">
                <img
                  src={img8}
                  alt="Image 2"
                  className="w-full mb-4 rounded-lg"
                />
                <p className="text-md">
                  With the right tools and some encouragement, we can all be a
                  success story!
                </p>
              </div>
            </div>

            {/* Third column */}
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="bg-white p-6 rounded-lg shadow">
                <img
                  src={img9}
                  alt="Image 3"
                  className="w-full mb-4 rounded-lg"
                />
                <p className="text-md">
                  Find the support you need with our members and coaches. Join a
                  community of thousand of users looking for a healthier life.
                </p>
              </div>
            </div>
          </div>

          {/* Button */}
          <div className="flex justify-center">
            <button className="bg-blue-900 text-white py-2 px-4 rounded-lg">
              Sign up to join Us
            </button>
          </div>
        </div>
      </section>

      <section className="bg-gray-200 py-12">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Strength in numbers
          </h2>

          {/* Three column layout */}
          <div className="flex flex-wrap mx-4 px-20">
            {/* First column */}
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="bg-white p-6 rounded-lg">
                <img
                  src={img10}
                  alt="Image 1"
                  className="w-full mb-4 rounded-lg"
                />
                <h3 className="text-xl font-bold mb-2 text-center">
                  116,478,452
                </h3>
                <p className="text-lg text-center ">Foods tracked this year</p>
              </div>
            </div>

            {/* Second column */}
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="bg-white p-6 rounded-lg">
                <img
                  src={img11}
                  alt="Image 2"
                  className="w-full mb-4 rounded-lg"
                />
                <h3 className="text-xl font-bold mb-2 text-center">81,736</h3>
                <p className="text-lg text-center">Five star review</p>
              </div>
            </div>

            {/* Third column */}
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="bg-white p-6 rounded-lg">
                <img
                  src={img12}
                  alt="Image 3"
                  className="w-full mb-4 rounded-lg"
                />
                <h3 className="text-xl font-bold mb-2 text-center">
                  1,664,634
                </h3>
                <p className="text-lg text-center">Pounds lost this year</p>
              </div>
            </div>
          </div>

          {/* Button */}
          <div className="flex justify-center">
            <button className="bg-blue-900 text-white py-2 px-4 rounded-lg">
              Sign up to join Us
            </button>
          </div>
        </div>
      </section>

      <section className="bg-gray-200 py-12">
        <div className="container mx-auto flex flex-col items-center">
          {/* First image and text */}
          <div className="mb-8 flex items-center justify-center max-w-56">
            <img src={img13} alt="Image 1" className="w-full rounded-lg" />
          </div>

          {/* Second image and text */}
          <div className="mb-8 flex items-center justify-center">
            <img src={img14} alt="Image 2" className="w-full rounded-lg" />
          </div>

          {/* Button */}
          <div className="flex justify-center">
            <button className="bg-blue-900 text-white py-2 px-4 rounded-lg">
              Become a success story
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
