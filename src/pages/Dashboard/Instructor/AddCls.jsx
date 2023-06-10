import { Helmet } from 'react-helmet-async';
import { AuthContext } from "../../../Providers/AuthProvider";
import { useContext } from "react";
import { useForm } from "react-hook-form";

const AddCls = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);
    };

    const { user } = useContext(AuthContext);
    // console.log(user)

    return (
        <div className='w-full ps-8 my-12'>
            <Helmet>
                <title>Summer Camp | Add Class</title>
            </Helmet>
            <h2 className='text-4xl font-semibold text-center'>Add A Class</h2>
            <div className="divider"></div>

            <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control">
                <label className="label">
                    <span className="label-text font-semibold">Class Name</span>
                </label>
                <input type="text" {...register("cls_name", { required: true })} placeholder="class name" className="input input-bordered" />
            </div>
            <div className="form-control ">
                <label className="label">
                    <span className="label-text font-semibold">Class Image</span>
                </label>
                <input type="text" {...register("cls_image", { required: true })} placeholder="photoURL" className="input input-bordered" />
            </div>
            <div className="form-control ">
                <label className="label">
                    <span className="label-text font-semibold">Instructor Name</span>
                </label>
                <input type="text" defaultValue={user.displayName} {...register("name", { required: true })} placeholder={user.displayName} className="input input-bordered" />
            </div>
            <div className="form-control ">
                <label className="label">
                    <span className="label-text font-semibold">Instructor Email</span>
                </label>
                <input type="email" defaultValue={user.email} {...register("email", { required: true })} placeholder={user.email} className="input input-bordered" />
            </div>
            <div className="form-control ">
                <label className="label">
                    <span className="label-text font-semibold">Available seats</span>
                </label>
                <input type="text" {...register("available_seats", { required: true })} placeholder="available seats" className="input input-bordered" />
            </div>
            <div className="form-control ">
                <label className="label">
                    <span className="label-text font-semibold">Price</span>
                </label>
                <input type="text" {...register("price", { required: true })} placeholder="price" className="input input-bordered" />
            </div>
            <button className="btn btn-accent mt-4 w-full">Add a class</button>
            </form>
        </div>
    );
};

export default AddCls;

// defaultValue={user.displayName}