import { AzureFunction, Context, HttpRequest } from "@azure/functions";
import { products } from "../products";

const httpTrigger: AzureFunction = async function (
  context: Context,
  req: HttpRequest
): Promise<void> {
  context.log("HTTP trigger function processed a request.");
  const id = req.params.id;
  const product = products.find(p => p.id === id);

  context.res = {
    // status: 200, /* Defaults to 200 */
    body: product,
  };
};

export default httpTrigger;
