const app = Vue.createApp({
	data() {
		return {
			text: "Hello World",
			originalJobListing: [],
			SelectedFilters: [],
			job_filter_data: [],
		};
	},
	mounted() {
		// Fetching Job listing
		this.getData();
		
	},
	methods: {
		getData() {
			// Getting Job Listings
			axios.get("data.json").then(({ data }) => {
				this.originalJobListing = data;
				this.job_filter_data = this.originalJobListing;
			});
		},
		filterData(filterName) {
			if (!this.SelectedFilters.includes(filterName)) {
				this.SelectedFilters.push(filterName);
				this.filterListing();
			}
		},
		resetFilter() {
			this.SelectedFilters = [];
			this.filterListing();
		},
		removeFilterFromArray(value) {
			const index = this.SelectedFilters.indexOf(value);
			if (index >= 0) {
				this.SelectedFilters.splice(index, 1);
				this.filterListing();
			}
		},
		filterListing() {
			this.job_filter_data = this.SelectedFilters.length  == 0 ? this.originalJobListing : [];
			this.SelectedFilters.forEach((filter) => {
				this.originalJobListing.filter((jobListing) => {
					const filter_data = filter.split("-");
					if(this.checkListingExsists(jobListing))
					{
						if(filter_data[0] == 'role' && jobListing.role == filter_data[1] ) {
							this.job_filter_data.push(jobListing);
						}
						if(filter_data[0] == 'level' && jobListing.level == filter_data[1] ) {
							this.job_filter_data.push(jobListing);
						}
						if(filter_data[0] == 'languages' && jobListing.languages.includes(filter_data[1]) ) {
							this.job_filter_data.push(jobListing);
						}
						if(filter_data[0] == 'tools' && jobListing.tools.includes(filter_data[1]) ) {
							this.job_filter_data.push(jobListing);
						}
					}
				});
			});
		},
		checkListingExsists(listing) {
			var checkRes = true;
			this.job_filter_data.forEach((filterdata) => {
				if(filterdata.id == listing.id)
				{
					checkRes = false;
					return;
				}
			});
			return checkRes;
		}
	},
});
