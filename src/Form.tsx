import React, { FormEvent, useRef, useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  name: z.string().min(3),
  quantity: z.number({ invalid_type_error: "Quantity is empty" }).min(1),
  category: z.string(),
});

type FormData = z.infer<typeof schema>;
import { FieldValue, FieldValues, useForm } from "react-hook-form";
const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const [items, setItems] = useState([{}]);

  const onSubmit = (data: FieldValues) => {};
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="" className="form-label">
          Name
        </label>
        <input
          {...register("name", { minLength: 3, required: true })}
          id="name"
          type="text"
          className="form-control"
        />
        {errors.name && <p className="text-danger">{errors.name.message}</p>}
      </div>
      <div className="mb-3">
        <label htmlFor="" className="form-label">
          Quantity
        </label>
        <input
          id="quantity"
          type="number"
          className="form-control"
          {...register("quantity", { valueAsNumber: true })}
        />
        {errors.quantity && (
          <p className="text-danger">{errors.quantity.message}</p>
        )}
      </div>
      <div className="mb-3">
        <select {...register("category")} className="form-control">
          <option value="groceries">Groceries</option>
          <option value="utility">Utility</option>
          <option value="entertainment">Entertainment</option>
        </select>
      </div>
      <button disabled={!isValid} className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};

export default Form;
