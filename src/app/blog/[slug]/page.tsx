import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  CalendarDays,
  Clock3,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";

import { blogPosts } from "@/data/blog-posts";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;

  const post = blogPosts.find(
    (item) => item.slug === slug
  );

  if (!post) {
    return {
      title: "Article introuvable",
    };
  }

  return {
    title: `${post.title} | Blog ConforMind`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({
  params,
}: Props) {
  const { slug } = await params;

  const post = blogPosts.find(
    (item) => item.slug === slug
  );

  if (!post) {
    notFound();
  }

  const relatedPosts = blogPosts
    .filter(
      (item) =>
        item.slug !== post.slug &&
        item.category === post.category
    )
    .slice(0, 3);

  return (
    <>
      {/* HERO */}

      <section className="relative overflow-hidden bg-[#0F172A] pt-36 pb-20 lg:pt-44 lg:pb-28">

        <div className="absolute inset-0">
          <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-[#2A9F8E]/20 blur-3xl" />

          <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-cyan-400/10 blur-3xl" />
        </div>

        <div className="relative z-10 mx-auto max-w-5xl px-6">

          <Link
            href="/blog"
            className="
              inline-flex
              items-center
              gap-2

              text-white/70

              transition-colors

              hover:text-white
            "
          >
            <ArrowLeft size={18} />
            Retour au blog
          </Link>

          <span
            className="
              mt-8
              inline-flex

              rounded-full

              bg-[#2A9F8E]/15

              px-4
              py-2

              text-sm
              font-semibold

              text-[#5EDFD2]
            "
          >
            {post.category}
          </span>

          <h1
            className="
              mt-6

              text-4xl
              md:text-5xl
              lg:text-6xl

              font-bold

              leading-tight

              text-white
            "
          >
            {post.title}
          </h1>

          <div
            className="
              mt-8

              flex
              flex-wrap

              items-center

              gap-6

              text-white/70
            "
          >
            <div className="flex items-center gap-2">
              <CalendarDays size={18} />
              {post.date}
            </div>

            <div className="flex items-center gap-2">
              <Clock3 size={18} />
              {post.readingTime}
            </div>
          </div>
        </div>
      </section>

      {/* IMAGE */}

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6">
          <div className="-mt-14 overflow-hidden rounded-[32px] shadow-2xl lg:-mt-20">
            <div className="relative h-[300px] md:h-[450px] lg:h-[550px]">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT */}

      <section className="bg-white py-20">
        <div className="mx-auto max-w-4xl px-6">

          <article
            className="
              prose
              prose-lg

              max-w-none

              prose-headings:text-slate-900
              prose-p:text-slate-700
            "
          >
            {post.content
              .split("\n")
              .filter(Boolean)
              .map((paragraph, index) => (
                <p
                  key={index}
                  className="
                    mb-6

                    text-lg
                    leading-9

                    text-slate-700
                  "
                >
                  {paragraph}
                </p>
              ))}
          </article>

        </div>
      </section>

      {/* ARTICLES SIMILAIRES */}

      {relatedPosts.length > 0 && (
        <section className="bg-slate-50 py-20">
          <div className="mx-auto max-w-7xl px-6">

            <div className="mb-12 text-center">
              <h2 className="text-4xl font-bold text-slate-900">
                Articles similaires
              </h2>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

              {relatedPosts.map((article) => (
                <Link
                  key={article.slug}
                  href={`/blog/${article.slug}`}
                  className="
                    group

                    overflow-hidden

                    rounded-[28px]

                    bg-white

                    shadow-sm

                    transition-all
                    duration-500

                    hover:-translate-y-2
                    hover:shadow-xl
                  "
                >
                  <div className="relative h-56">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="
                        object-cover

                        transition-transform
                        duration-700

                        group-hover:scale-110
                      "
                    />
                  </div>

                  <div className="p-6">

                    <span className="text-sm font-semibold text-[#2A9F8E]">
                      {article.category}
                    </span>

                    <h3
                      className="
                        mt-3

                        text-xl
                        font-bold

                        text-slate-900
                      "
                    >
                      {article.title}
                    </h3>

                    <p
                      className="
                        mt-3

                        text-slate-600
                      "
                    >
                      {article.excerpt}
                    </p>

                    <span
                      className="
                        mt-5

                        inline-flex
                        items-center
                        gap-2

                        font-semibold

                        text-[#2A9F8E]
                      "
                    >
                      Découvrir

                      <ArrowRight size={16} />
                    </span>

                  </div>
                </Link>
              ))}

            </div>
          </div>
        </section>
      )}

      {/* CTA */}

      <section className="bg-white py-24">
        <div className="mx-auto max-w-5xl px-6">

          <div
            className="
              rounded-[40px]

              bg-gradient-to-br
              from-[#0F5F54]
              via-[#1B7A6D]
              to-[#2A9F8E]

              p-10
              md:p-14

              text-center
            "
          >
            <h2
              className="
                text-4xl
                font-bold

                text-white
              "
            >
              Besoin d'un accompagnement ?
            </h2>

            <p
              className="
                mx-auto
                mt-5

                max-w-2xl

                text-lg

                text-white/80
              "
            >
              Nos experts vous accompagnent dans vos
              projets de conformité, certification et
              amélioration continue.
            </p>

            <Link
              href="/contact"
              className="
                mt-8
                inline-flex

                items-center
                gap-2

                rounded-2xl

                bg-white

                px-8
                py-4

                font-semibold

                text-[#2A9F8E]

                transition-all
                duration-300

                hover:-translate-y-1
              "
            >
              Nous contacter

              <ArrowRight size={18} />
            </Link>
          </div>

        </div>
      </section>
    </>
  );
}