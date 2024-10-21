import React from "react";

export const Jumbotron = () => {
  return (
    <div class="p-5 mb-4 bg-light rounded-3 mt-5">
      <div>
        <h1 class="mt-1 d-flex justify-content-start display-1">
          A warm welcome!
        </h1>
        <p class="col-12 fs-4 text-start ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
          obcaecati sint, harum ipsum magni repudiandae, esse quo corrupti
          assumenda ipsam neque dicta similique voluptas? Laboriosam asperiores
          voluptates id consequatur suscipit?
        </p>
        <button class="btn btn-primary btn-lg d-flex justify-content-start" type="button">
         Call to action!
        </button>
      </div>
    </div>
  );
};
