import { component$ } from "@builder.io/qwik";
import { ImageCarousel } from "./image-carousel";
import { SITE_NAME } from "~/lib/constatnts";
import { Form } from "@builder.io/qwik-city";
import { Button } from "~/components/ui/button/button";
import { TextCarousel } from "./text-carousel";

export default component$(() => {
  return (
    <div class="py-12">
      <section class="mx-auto max-w-6xl px-4">
        <div class="grid grid-cols-12 gap-16">
          <div class="col-span-7 flex flex-col gap-4">
            <h1 class="text-3xl font-bold text-primary">{SITE_NAME}</h1>
            <h2 class="text-4xl font-extrabold">
              Meetup—The people platform. Where interests become{" "}
              <TextCarousel />.
            </h2>
            <p>
              Your new community is waiting for you. For 20+ years, millions of
              people have chosen Meetup to make real connections over shared
              interests. Start a group today.
            </p>
            <div>
              <Form>
                <Button type="submit" look={"primary"}>
                  Start a group
                </Button>
              </Form>
            </div>
          </div>
          <div class="col-span-5">
            <ImageCarousel />
          </div>
        </div>
      </section>
    </div>
  );
});