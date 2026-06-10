"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { blogPosts } from "@/data/blog-posts";

export default function BlogFeatured() {
  const featured = blogPosts.find(
    (post) => post.featured
  );

  if (!featured) return null;

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">

        <div className="mb-8">
          <span className="rounded-full bg-[#2A9F8E]/10 px-4 py-2 text-sm font-semibold text-[#2A9F8E]">
            Article à la une
          </span>
        </div>

        <div
          className="
            overflow-hidden
            rounded-[32px]

            border
            border-slate-200

            bg-white

            shadow-xl
          "
        >
          <div className="grid lg:grid-cols-2">

            {/* Image */}

            <div className="relative min-h-[320px]">
              <Image
                src={featured.image}
                alt={featured.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Content */}

            <div className="flex flex-col justify-center p-8 lg:p-12">

              <span className="text-sm font-semibold text-[#2A9F8E]">
                {featured.category}
              </span>

              <h2 className="mt-4 text-3xl font-bold text-slate-900 lg:text-4xl">
                {featured.title}
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                {featured.excerpt}
              </p>

              <div className="mt-6 flex items-center gap-4 text-sm text-slate-500">
                <span>{featured.date}</span>
                <span>•</span>
                <span>{featured.readingTime}</span>
              </div>

              <Link
                href={`/blog/${featured.slug}`}
                className="
                  mt-8

                  inline-flex
                  w-fit

                  items-center
                  gap-2

                  rounded-xl

                  bg-[#2A9F8E]

                  px-6
                  py-3

                  font-semibold
                  text-white

                  transition-all
                  duration-300

                  hover:bg-[#248A7B]
                "
              >
                Lire l'article

                <ArrowRight size={18} />
              </Link>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}