import Image from 'next/image';

export default function Home() {
  return (
    <>
      {/* ==================== HEADER ==================== */}
      <div className="header">
        <nav>
          <Image
            src="https://clonennetflix.blob.core.windows.net/images/netflix_PNG25.png"
            alt="Netflix Logo"
            width={167}
            height={45}
            className="logo"
          />
          <div>
            <button className="language-btn">
              English
              <Image src="https://clonennetflix.blob.core.windows.net/images/down-icon.png" alt="" width={12} height={12} />
            </button>
           <button  className="sign-in-btn" onClick={() => window.location.href =
             "https://www.netflix.com/tr-en/login?serverState=%7B%22realm%22%3A%22growth%22%2C%22name%22%3A%22LOGIN%22%2C%22clcsSessionId%22%3A%22f4bf10a7-60e0-4bbd-aefe-e262cd83f777%22%2C%22sessionContext%22%3A%7B%22session-breadcrumbs%22%3A%7B%22funnel_name%22%3A%22loginWeb%22%7D%7D%7D"}
>
  Sign In
</button>

          </div>
        </nav>

        <div className="header-content">
          <h1>Unlimited movies, TV shows, and more.</h1>
          <h3>Watch anywhere. Cancel anytime.</h3>
          <p>
            Ready to watch? Enter your email to create or restart your membership.
          </p>
          <form className="email-signup">
           <input type="email" placeholder="Email address" required />

            <button type="button" className="get-started-btn" onClick={() => window.location.href =
    "https://www.netflix.com/signup?serverState=%7B%22realm%22%3A%22growth%22%2C%22name%22%3A%22EMAIL_REGISTER_SEND_LINK%22%2C%22clcsSessionId%22%3A%22de71a492-5578-4a78-861c-2f728cd6592f%22%2C%22sessionContext%22%3A%7B%22session-breadcrumbs%22%3A%7B%22funnel_name%22%3A%22signupSimplicity%22%7D%7D%7D"
  }
>
  Get Started &gt;
</button>

          </form>
        </div>
      </div>

      {/* ==================== FEATURES ==================== */}
      <div className="features">
        {/* Linha 1 */}
        <div className="row">
          <div className="text-col">
            <h2>Enjoy on your TV.</h2>
            <p>
              Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV,
              Blu-ray players, and more.
            </p>
          </div>
          <div className="image-col">
            <Image src="https://clonennetflix.blob.core.windows.net/images/feature-1.png" alt="Feature" width={600} height={450} />
          </div>
        </div>

        {/* Linha 2 */}
        <div className="row">
          <div className="image-col">
            <Image src="https://clonennetflix.blob.core.windows.net/images/feature-2.png" alt="Feature" width={600} height={450} />
          </div>
          <div className="text-col">
            <h2>Download your shows to watch offline.</h2>
            <p>Save your favourites easily and always have something to watch.</p>
          </div>
        </div>

        {/* Linha 3 */}
        <div className="row">
          <div className="text-col">
            <h2>Watch everywhere.</h2>
            <p>
              Stream unlimited movies and TV shows on your phone, tablet,
              laptop and TV.
            </p>
          </div>
          <div className="image-col">
            <Image src="https://clonennetflix.blob.core.windows.net/images/feature-3.png" alt="Feature" width={600} height={450} />
          </div>
        </div>

        {/* Linha 4 */}
        <div className="row">
          <div className="image-col">
            <Image src="https://clonennetflix.blob.core.windows.net/images/feature-4.png" alt="Feature" width={600} height={450} />
          </div>
          <div className="text-col">
            <h2>Create profiles for children.</h2>
            <p>
              Send children on adventures with their favourite characters in a
              space made just for them—free with your membership.
            </p>
          </div>
        </div>
      </div>

      {/* ==================== FAQ ==================== */}
      <div className="faq">
        <h2>Frequently Asked Questions</h2>
        <ul className="accordion">
          {/* Item 1 */}
          <li>
            <input type="radio" name="accordion" id="first" />
            <label htmlFor="first">What is Netflix?</label>
            <div className="content">
              <p>
                Netflix is a streaming service that offers a wide variety of
                award-winning TV shows, movies, anime, documentaries, and more
                on thousands of internet-connected devices. You can watch as
                much as you want, whenever you want without a single commercial
                – all for one low monthly price.
              </p>
            </div>
          </li>

          {/* Item 2 */}
          <li>
            <input type="radio" name="accordion" id="second" />
            <label htmlFor="second">How much does Netflix cost?</label>
            <div className="content">
              <p>Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee.</p>
            </div>
          </li>

          {/* Item 3 */}
          <li>
            <input type="radio" name="accordion" id="third" />
            <label htmlFor="third">Where can I watch?</label>
            <div className="content">
              <p>
                Watch anywhere, anytime. Sign in with your Netflix account to
                watch instantly on the web at netflix.com from your personal
                computer or on any internet-connected device that offers the
                Netflix app.
              </p>
            </div>
          </li>

          {/* Os outros itens seguem o mesmo padrão */}
          <li>
            <input type="radio" name="accordion" id="fourth" />
            <label htmlFor="fourth">How do I cancel?</label>
            <div className="content">
              <p>Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks.</p>
            </div>
          </li>

          <li>
            <input type="radio" name="accordion" id="fifth" />
            <label htmlFor="fifth">What can I watch on Netflix?</label>
            <div className="content">
              <p>Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more.</p>
            </div>
          </li>

          <li>
            <input type="radio" name="accordion" id="sixth" />
            <label htmlFor="sixth">Is Netflix good for kids?</label>
            <div className="content">
              <p>The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space.</p>
            </div>
          </li>
        </ul>

        <small>
          Ready to watch? Enter your email to create or restart your membership
        </small>
        <form className="email-signup">
          <input type="email" placeholder="Email address" required />
          <button type="submit" className="get-started-btn">
            Get Started &gt;
          </button>
        </form>
      </div>

      {/* ==================== FOOTER ==================== */}
      <div className="footer">
        <h2>Questions? Call 000-800-040-1843</h2>

        <div className="row">
          <div className="col">
            <a href="#">FAQ</a>
            <a href="#">Investor Relations</a>
            <a href="#">Privacy</a>
            <a href="#">Speed Test</a>
          </div>
          <div className="col">
            <a href="#">Help Center</a>
            <a href="#">Jobs</a>
            <a href="#">Cookies Preference</a>
            <a href="#">Legal Notices</a>
          </div>
          <div className="col">
            <a href="#">Account</a>
            <a href="#">Ways to watch</a>
            <a href="#">Corporate Information</a>
            <a href="#">Only on Netflix</a>
          </div>
          <div className="col">
            <a href="#">Media Center</a>
            <a href="#">Terms of Use</a>
            <a href="#">Contact Us</a>
          </div>
        </div>

        <button className="language-btn-footer">
          English
          <Image src="https://clonennetflix.blob.core.windows.net/images/down-icon.png" alt="" width={12} height={12} />
        </button>
        <p className="copyright-txt">Netflix Mozambique</p>
      </div>
    </>
  );
}