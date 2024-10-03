import bg from "../../assets/faq/faq.svg";
const Faq = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${bg})`,
      }}
      className=" bg-no-repeat  object-fill mt-24 px-5 md:px-12 lg:px-60 py-32"
    >
      <h2 className="text-3xl font-bold text-center mb-8 mt-6 text-white">
        Frequently Asked Questions
      </h2>
      <div className=" space-y-6">
        <div className="collapse collapse-plus bg-white">
          <input type="radio" name="my-accordion-3" defaultChecked />
          <div className="collapse-title text-xl font-medium">
            How can I assign jobs to employees or contractors using the app?
          </div>
          <div className="collapse-content">
            <p>
              To assign jobs, simply navigate to the “Jobs” section of the app,
              select the task you want to assign, and choose the employee or
              contractor from your team. You can add any specific instructions
              or deadlines before sending the assignment.
            </p>
          </div>
        </div>
        <div className="collapse collapse-plus bg-white">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-medium">
            Can employees update the status of their tasks in real time?{" "}
          </div>
          <div className="collapse-content">
            <p>
              Yes! Employees can update the status of their tasks to “In
              Progress” or “Completed” at any time. This allows everyone on the
              team to stay informed about the progress of each job in real time.
            </p>
          </div>
        </div>
        <div className="collapse collapse-plus bg-white">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-medium">
            Can I export completed projects to share with clients?{" "}
          </div>
          <div className="collapse-content">
            <p>
              Yes, you can easily export completed projects and share them with
              clients. This feature allows you to provide detailed reports and
              documentation, ensuring clear communication and transparency
              regarding project outcomes.
            </p>
          </div>
        </div>
        <div className="collapse collapse-plus bg-white">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-medium">
            How can I upload photos or documents related to a job?{" "}
          </div>
          <div className="collapse-content">
            <p>
              You can easily upload photos and documents by selecting the job
              and clicking on the “Upload” button. This feature allows you to
              showcase completed work or provide additional information as
              needed.
            </p>
          </div>
        </div>
        <div className="collapse collapse-plus bg-white">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-medium">
            Is there a limit to how many jobs or files I can track in the app?{" "}
          </div>
          <div className="collapse-content">
            <p>
              No, there’s no limit! You can track as many jobs and upload as
              many files as you need. Our application is designed to provide you
              with unlimited storage for your projects and documentation.
            </p>
          </div>
        </div>
        <div className="collapse collapse-plus bg-white">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-medium">
            How many employees can I add to the app?{" "}
          </div>
          <div className="collapse-content">
            <p>
              {" "}
              You can add as many employees as you like, as long as they are
              registered as users within the app. This allows you to build a
              fully equipped team for efficient project management.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
