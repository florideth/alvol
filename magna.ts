
  /**
   * This snippet has been automatically generated and should be regarded as a code template only.
   * It will require modifications to work.
   * It may require correct/in-range values for request initialization.
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The resource name of the Device to transact with.
   */
  // const name = 'abc123'
  /**
   *  Required. The transaction to execute.
   */
  // const transaction = {}

  // Imports the Ethos library
  const {EthosServiceClient} = require('@google-cloud/ethos').v1;

  // Instantiates a client
  const ethosClient = new EthosServiceClient();

  async function callTransact() {
    // Construct request
    const request = {
      name,
      transaction,
    };

    // Run request
    const response = await ethosClient.transact(request);
    console.log(response);
  }

  callTransact();


