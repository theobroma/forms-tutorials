import { Alert } from 'flowbite-react';

import JobForm from '../../@components/JobForm';

const SimpleView = () => {
  return (
    <div>
      <Alert color="info">
        <span>
          <span className="font-medium">Info alert!</span> Flowbite connected
          !!!
        </span>
      </Alert>
      <JobForm />
    </div>
  );
};

export default SimpleView;
