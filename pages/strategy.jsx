import React from "react";
import { GiCheckMark } from "react-icons/gi";
import Head from "next/head";

const Client = () => {
  return (
    <div>
      <Head>
        <title>Best Website Design Strategy</title>
        <meta
          name="Web development plans"
          content="Web design strategy is a plan of action designed to reach the goals
            of the website. Clear direction is critical to the success of a
            website because all the elements of the site need to follow a common
            theme or themes. A web design strategy is a collection of items that
            are carefully mapped out to achieve the goal of the site. These
            elements should be directly in line with the company vision and
            branding."
        />
        <link rel="icon" href="/logo.svg" />
      </Head>
      <div className="strategy">
        <div className="web-strategy">
          <h1>The Best Website Design Strategy</h1>
          <p>
            Web design strategy is a plan of action designed to reach the goals
            of the website. Clear direction is critical to the success of a
            website because all the elements of the site need to follow a common
            theme or themes. A web design strategy is a collection of items that
            are carefully mapped out to achieve the goal of the site. These
            elements should be directly in line with the company vision and
            branding.
          </p>
        </div>
        <h1>norDev Web Design Strategy</h1>
        <div className="sub-heading">
          norDev has a simple 6 step web design strategic process that quickly
          identifies all the essential elements of web design for your website.
          Here is a quick overview of our 7 step process used when we are about
          to design and develop a web project:
        </div>

        <div className="col">
          <div className="heading">Vision of the website</div>
          <div className="row">
            <div className="icon">
              <GiCheckMark className="icon" />
            </div>
            <p>
              Before defining web strategy or goals, you must first have a clear
              vision of the site’s purpose which is often in line with the
              overall company vision and branding elements.
            </p>
          </div>
        </div>

        <div className="divider"></div>
        <div className="col">
          <div className="heading">Goals of the website</div>
          <div className="row">
            <div className="icon">
              <GiCheckMark className="icon" />
            </div>
            <p>
              What is the purpose of the website? What are the goals of the
              site? Your website should serve a definite purpose. Our team will
              help guide you to achieve these goals, and we often find ways to
              simplify your current processes with the use of new developments.
              Understanding the intent of the website will help define the
              overall strategy.
            </p>
          </div>
        </div>

        <div className="divider"></div>

        <div className="col">
          <div className="heading">Target Market</div>
          <div className="row">
            <div className="icon">
              <GiCheckMark className="icon" />
            </div>
            <p>
              A Target Market is sometimes called the target audience. It is
              critical to understand your market. To whom are you communicating
              your message? How old are they? What is their gender? What do they
              do for work? What is their education? What do they like? How do
              they communicate?
            </p>
          </div>
        </div>

        <div className="divider"></div>
        <div className="col">
          <div className="heading">Branding</div>
          <div className="row">
            <div className="icon">
              <GiCheckMark className="icon" />
            </div>
            <p>
              Your brand, in a simple format, ties in all the elements of
              communication into one clear message. Your brand, as simple as it
              may appear, should have a purpose for every aspect. Font types,
              keywords, colors, design, and placement. Your brand is what
              differentiates your company from your competitors.
            </p>
          </div>
        </div>

        <div className="divider"></div>

        <div className="col">
          <div className="heading">Design to Goals</div>
          <div className="row">
            <div className="icon">
              <GiCheckMark className="icon" />
            </div>
            <p>
              Designing to goals is a fusion of several skills and art forms. It
              combines web design, graphic design, SEO (search engine
              optimization), competitive analysis, future web development
              trends, message, branding, and purposeful direction to achieve
              website goals.
            </p>
          </div>
        </div>
        <div className="divider"></div>
        <div className="col">
          <div className="heading">Evaluate and Execute</div>
          <div className="row">
            <div className="icon">
              <GiCheckMark className="icon" />
            </div>
            <p>
              The last step in our web design strategy process is to evaluate
              the strategy from beginning to end. Once we have thoroughly vetted
              the web design strategy, we move it to web development to turn
              your website into a reality.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Client;
