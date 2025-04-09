export const baseURL =
  import.meta.env.VITE_BACKEND_API_URL || "http://localhost:3000/";


  const SummaryApi = {
    addJob : {
        url: "/api/jobs",
        method: "post",
    },
    viewJobs :{
      url: "/api/jobs",
      method: "get",
    },
    updateJob : {
      url: "/api/jobs",
      method: "put",
    },
    deleteJob : {
      url: "/api/jobs",
      method: "delete",
    }
  };
  
  export default SummaryApi;
  