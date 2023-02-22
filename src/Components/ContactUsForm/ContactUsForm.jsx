// import React from "react";
// import MobileTopBar from "../Containers/MobileTopBar";
// import { Link } from "react-router-dom";

// const ContactUsForm = () => {
//   const [name, setName] = React.useState("");
//   const [email, setEmail] = React.useState("");
//   const [subject, setSubject] = React.useState("");
//   const [message, setMessage] = React.useState("");
//   const [subscribed, setSubscribed] = React.useState(false);
//   const [submitting, setSubmitting] = React.useState(false);
//   const [error, setError] = React.useState(null);
//   const [success, setSuccess] = React.useState(false);

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     setSubmitting(true);

// Perform form validation here

// If form is valid, submit the data to the server
// and reset the form
//     if (formIsValid) {
//       setName("");
//       setEmail("");
//       setSubject("");
//       setMessage("");
//       setSubscribed(false);
//       setError(null);
//       setSuccess(true);
//     } else {
//       setError(
//         "There was a problem with the form. Please check your inputs and try again."
//       );
//       setSubmitting(false);
//     }
//   };

//   return (
//     <div className="w-full bg:w-[85%] h-screen bg:ml-[15%] ">
//       <div className="block bg:hidden">
//         <MobileTopBar />
//       </div>
//       <nav className="bg-mainWhite w-full py-12 md:py-5 px-5 sm:px-10">
//         <h2 className="text-center text-mainBlack font-bold text-xl">
//           Contact Us
//         </h2>
//       </nav>
//       <div className="w-full px-5 sm:px-10  bg-greyEight  py-10 h-[70%]">
//         <form
//           onSubmit={handleSubmit}
//           className="flex flex-col justify-center m-auto sm:w-[400px] w-full "
//         >
//           {error && <p className="error">{error}</p>}
//           {success && (
//             <p className="success">Your message was sent successfully!</p>
//           )}
//           <label htmlFor="name">Name:</label>
//           <input
//             type="text"
//             id="name"
//             value={name}
//             onChange={(event) => setName(event.target.value)}
//             className="hover:bg-gradedBlue text-mainBlue"
//           />
//           <label htmlFor="email">Email:</label>
//           <input
//             type="email"
//             id="email"
//             value={email}
//             onChange={(event) => setEmail(event.target.value)}
//             className="hover:bg-gradedBlue text-mainBlue"
//           />
//           <label htmlFor="subject">Subject:</label>
//           <input
//             type="text"
//             id="subject"
//             value={subject}
//             onChange={(event) => setSubject(event.target.value)}
//             className="hover:bg-gradedBlue text-mainBlue"
//           />
//           <label htmlFor="message">Message:</label>
//           <textarea
//             id="message"
//             value={message}
//             onChange={(event) => setMessage(event.target.value)}
//             className="hover:bg-gradedBlue text-mainBlue "
//           />
//           <label htmlFor="subscribe">
//             <input
//               type="checkbox"
//               id="subscribe"
//               checked={subscribed}
//               onChange={(event) => setSubscribed(event.target.checked)}
//               className="hover:bg-gradedBlue text-mainBlue my-4 "
//             />{" "}
//             Subscribe to our newsletter
//           </label>
//           <button
//             type="submit"
//             disabled={submitting}
//             className="BlueGradient text-mainWhite py-1 rounded-md"
//           >
//             Send
//           </button>
//         </form>
//       </div>
//       <div className="text-center text-[14px] text-greyFour flex flex-col justify-center h-[10%] py-12">
//         <p>© 2023 Blockterium Technology LLC</p>
//         <p className="text-mainBlue">
//           <Link
//             to={"/terms-conditions"}
//             className="cursor-pointer font-bold mr-1"
//           >
//             Terms of Use
//           </Link>

//           <Link
//             to={"/privacy-policy"}
//             className="cursor-pointer font-bold mr-1"
//           >
//             Privacy Policy
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default ContactUsForm;
