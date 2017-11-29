module.exports = {
	DTO : (id, uId, name, rTypeId, ctime, utime, feed) => { 
		return {
			ID 	 		 : id,
			UserID 		 : uId,
			Name 		 : name,
			ReportTypeID : rTypeId,
			CreatedAt    : ctime,
		  	LastUpdate   : utime,
		  	Feedback 	 : feed
		};
	}
/* exports ends */
};