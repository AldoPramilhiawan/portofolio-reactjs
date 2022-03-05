import React from "react";

const Contact = () => {
  return (
    <div class="container mt-5" id="contact">
      <h3 class="fs-bold fs-2 text-center mb-3">
        <b>Contact</b>
      </h3>
      <div class="card mx-auto" style={{width: '500px'}}>
        <div class="card-body">
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">
              Email address
            </label>
            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
          </div>
          <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">
              Message
            </label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
          </div>
          <div class="d-grid gap-2">
            <button class="btn btn-warning border border-dark btn-sm shadow-sm text-dark px-3 py-2">Send</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
