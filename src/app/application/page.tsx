import H1 from "@/components/H1";
import Form from "@/partials/application/Form";
import { Fragment } from "react";

const ApplicationPage = () => {
  return (
    <Fragment>
      <H1 text={"Application Form"} />
      <div className="bg-accent p-3 rounded-xl mt-5 text-gray-950 dark:text-white">
        <p>
          Başvurunuz için lütfen aşağıdaki formu doldurunuz. Başvurunuz
          incelendikten sonra{" "}
          <span className="font-bold underline">girmiş olduğunuz e-posta adresine</span> dönüş
          yapılacaktır.
        </p>
      </div>
      <Form />
    </Fragment>
  );
};

export default ApplicationPage;
