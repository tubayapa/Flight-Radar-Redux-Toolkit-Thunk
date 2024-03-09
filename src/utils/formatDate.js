import moment from "moment";

// function is to format date with moment

const formatDate = (unix_time) => {
  const date = new Date(unix_time * 1000);
  return moment(date).calendar();
};

export default formatDate;
