import React, { useState } from "react";
import ReactQuill from "react-quill";
import { Card, CardBody, Form, FormInput, Button  } from "shards-react";

import "react-quill/dist/quill.snow.css";
import "../../assets/quill.css";


function handleSubmit(e) {
  e.preventDefault();
  console.log('You clicked submit.');
}

const [value, setValue] = useState('');

const Editor = () => (

  <Card small className="mb-3">
    <CardBody>
      <Form className="add-new-post" onSubmit={handleSubmit}>
        <FormInput size="lg" className="mb-3" placeholder="Your Post Title" />
        <ReactQuill className="add-new-post__editor mb-1" value={value} />
        <Button type="submit">Submit</Button>
      </Form>
    </CardBody>
  </Card>
);

export default Editor;
