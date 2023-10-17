export default function StepperControl({ handleClick, currentStep, steps, formData }) {
  return (
    <div className="container mt-4 mb-8 flex justify-around">
      <button
        onClick={() => handleClick()}
        className={`cursor-pointer rounded-xl border-2 border-slate-300 bg-white py-2 px-4 font-semibold uppercase text-slate-400 transition duration-200 ease-in-out hover:bg-slate-700 hover:text-white  ${
          currentStep === 1 ? " cursor-not-allowed opacity-50 " : ""
        }`}
      >
        Back
      </button>

      <button
  onClick={() => handleClick("next")}
  className="cursor-pointer rounded-lg bg-green-500 py-2 px-4 font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-slate-700 hover:text-white"
>
  {currentStep === steps.length - 1 ? (
    <button onClick={() => {
      // Print the collected data to the console
      console.log(formData);

      // You can also submit the data to a server or perform other actions here.
    }}>Submit</button>
  ) : (
    "Next"
  )}
</button>
    </div>
  );
}
