import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from 'yup';

const initialValues = {
         name: '',
         email: '',
         channel: '',
};
      
const onSubmit = (vals) => {
   console.log(vals);
};

// const validate = (vals) => {
//    let errors = {
//    };

//    if (!vals.name) {
//       errors.name = "Required";
//    }

//    if (!vals.email) {
//       errors.email = "Required";
//    } else if (!/^[_a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/i.test(vals.email)) {
//       errors.email = "Invalid email format";
//    }

//    if (!vals.channel) {
//       errors.channel = "Required";
//    }

//    return errors;
// };

const validationSchema = Yup.object({
   name: Yup.string().required("Required!"),
   email: Yup.string().email("Invalid email format").required("Required!"),
   channel: Yup.string().required("Required!"),
});

export const YoutubeForm = () => {
   return (
      <Formik
         initialValues={initialValues}
         onSubmit={onSubmit}
         validationSchema={validationSchema}
      >
         <Form>
            <div className="form-control">
             <label htmlFor="name">Name</label>
             <Field
                  type="text"
                  id="name"
                  name='name'
             />
               <ErrorMessage name='name'/>
            </div>
            
            <div className="form-control">
            <label htmlFor="email">Email</label>
               <Field
                  type="email"
                  id="email"
                  name="email"
               />
            <ErrorMessage name='email'/>
            </div>

            <div className="form-control">
            <label htmlFor="channel">Channel</label>
               <Field
                  type="text"
                  id="channel"
                  name="channel"
               />
            <ErrorMessage name="channel" />
            </div>

            <button type="submit">Submit</button>

         </Form>
      </Formik>
      );
}