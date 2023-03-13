import { Models } from "@/util/Models"

export const config = {
  runtime: 'edge',
}

export default function handler() {
  const models = new Models;
  if (models.checkInstalled()) {
    return new Response(
      JSON.stringify({ status: 'yes' }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json'
        }
      }
    )

  } else {
    return new Response(
      JSON.stringify({ status: 'no' }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json'
        }
      }
    )
  }
}
