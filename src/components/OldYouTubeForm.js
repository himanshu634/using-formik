import { useFormik } from "formik";
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

export const OldYoutubeForm = () => {
   const formik = useFormik({
      initialValues ,
      onSubmit,
      validationSchema
      // validate,
   });

   return (
      <div>
         <form onSubmit={formik.handleSubmit}>
            <div className="form-control">
             <label htmlFor="name">Name</label>
             <input type='text' id='name' name="name" onChange={formik.handleChange} value={formik.values.name} />
               {formik.errors.name ? <div className="error">{formik.errors.name}</div> : null}
            </div>
            
            <div className="form-control">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" onChange={formik.handleChange} value={formik.values.email} /> 
            {formik.errors.email ? <div className="error">{formik.errors.email}</div>:null}
            </div>

            <div className="form-control">
            <label htmlFor="channel">Channel</label>
            <input type="text" id="channel" name="channel" onChange={formik.handleChange} value={formik.values.channel}/>
            {formik.errors.channel ? <div className="error">{formik.errors.channel}</div>:null}
            </div>

            <button type="submit">Submit</button>

         </form>
      </div>
      );
}