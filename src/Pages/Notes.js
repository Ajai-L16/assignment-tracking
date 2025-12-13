import ".././Styles/Notes.css"
import {useForm} from "react-hook-form";


function Notes() {
  const {
      register,
      handleSubmit,
      formState: { errors },
  } = useForm();

   const onSubmitHandler = (e) => {
        console.log(e);
        alert("data added successfully");
    };

  return (
    <div className="notes">
      <h1 className="">Notes Page</h1>
         <form onSubmit={handleSubmit(onSubmitHandler)}>
                <label>Author: </label>
                <input {...register("name")}type="text" />
                <label>Date: </label>
                <input {...register("date")} type="date" />
                <label>Subject: </label>
                <input {...register("subject")} type="text" />
                <label>Description</label>
                <input {...register("description")} type="text" />
                <button type="submit">Add Notes</button>
            </form>

    </div>
  );
}
export default Notes;
