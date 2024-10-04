import bg from "../../assets/faq/faq.svg";
import rope1 from "../../assets/faq/Group 18.svg";
import rope2 from "../../assets/faq/Group 19.svg";

const faqData = [
  {
    question:
      "How can I assign jobs to employees or contractors using the app?",
    answer:
      "To assign jobs, simply navigate to the “Jobs” section of the app, select the task you want to assign, and choose the employee or contractor from your team. You can add any specific instructions or deadlines before sending the assignment.",
  },
  {
    question: "Can employees update the status of their tasks in real time?",
    answer:
      "Yes! Employees can update the status of their tasks to “In Progress” or “Completed” at any time. This allows everyone on the team to stay informed about the progress of each job in real time.",
  },
  {
    question: "Can I export completed projects to share with clients?",
    answer:
      "Yes, you can easily export completed projects and share them with clients. This feature allows you to provide detailed reports and documentation, ensuring clear communication and transparency regarding project outcomes.",
  },
  {
    question: "How can I upload photos or documents related to a job?",
    answer:
      "You can easily upload photos and documents by selecting the job and clicking on the “Upload” button. This feature allows you to showcase completed work or provide additional information as needed.",
  },
  {
    question:
      "Is there a limit to how many jobs or files I can track in the app?",
    answer:
      "No, there’s no limit! You can track as many jobs and upload as many files as you need. Our application is designed to provide you with unlimited storage for your projects and documentation.",
  },
  {
    question: "How many employees can I add to the app?",
    answer:
      "You can add as many employees as you like, as long as they are registered as users within the app. This allows you to build a fully equipped team for efficient project management.",
  },
];

const Faq = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${bg})`,
      }}
      className=" relative bg-no-repeat  object-cover mt-24 px-5 md:px-12 lg:px-60 py-8 lg:py-32"
    >
      <h2 className="text-3xl font-bold text-center mb-4 lg:mb-8 mt-6 text-white">
        Frequently Asked Questions
      </h2>
      <div className=" space-y-4 md:space-y-6">
     
        {faqData?.map((faq, ind) => (
          <div key={ind} className="collapse collapse-plus bg-white">
            <input type="radio" name="my-accordion-3" defaultChecked />
            <div className="collapse-title  text-lg md:text-xl font-medium">
              {faq?.question}
            </div>
            <div className="collapse-content text-sm md:text-base">
              <p>{faq?.answer}</p>
            </div>
          </div>
        ))}
      </div>
      <img className="absolute top-4 hidden lg:inline-block right-0 " src={rope1} alt="" />
      <img className="absolute hidden lg:inline-block bottom-4 left-0 " src={rope2} alt="" />
    </div>
  );
};

export default Faq;
