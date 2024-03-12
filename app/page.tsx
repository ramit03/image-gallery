import { Alert } from "@/app/components/bootstrap"

export default function Home() {
  return (
   <div>
    <Alert>
    <p>This is a sample project to showcase and learn <strong>NextJs app directory </strong></p> and its features,including:
    <ul>
      <li>static and dynamic server-side rendering</li>
      <li>incremental static regeneration</li>
      <li>client-side rendering</li>
      <li>route handlers(API endpoints)</li>
      <li>meta-data API</li>
      <li> and more</li>
    </ul>
    <p className="mb-0">
      Every page uses a different approach to <strong>fetching and caching data</strong>.Click on the links in the navbar to try them out.
    </p>
    </Alert>
    <Alert variant="secondary">
    <p>
      Note:In order to load the data on this site, the Unsplash API key has been used which has a free quota of 50 requests per hour so you might start getting errors if you try too often.
    </p>
    </Alert>
   </div>
  );
}
