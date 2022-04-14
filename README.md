![astro architect lambda](./astro-arc-lambda.png)

[Astro released](https://astro.build/blog/astro-1-beta-release/) an experimental SSR feature with an adapter API. To integrate with the Lambda runtime, an API Gateway event can be transformed into an Astro Request. Then the Astro Response is returned to the client. With [this adapter](https://github.com/tbeseda/astro-lambda-adapter), an Astro + Lambda SSR project can be developed locally and deployed with Architect.
