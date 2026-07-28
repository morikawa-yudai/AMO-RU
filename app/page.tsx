const navItems = [
  { href: "#about", icon: "⌂", label: "私たちについて", en: "ABOUT" },
  { href: "#business", icon: "◌", label: "事業紹介", en: "BUSINESS" },
  { href: "#news", icon: "✦", label: "お知らせ", en: "NEWS" },
  { href: "#recruit", icon: "♧", label: "採用情報", en: "RECRUIT" },
  { href: "#contact", icon: "↗", label: "お問い合わせ", en: "CONTACT" },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="アモールトーワ ホーム">
          <span className="brand-mark" aria-hidden="true">
            <i />
            <i />
            <i />
          </span>
          <span className="brand-name">
            <b>AMOUR TOWA</b>
            <small>株式会社アモールトーワ</small>
          </span>
        </a>

        <nav className="desktop-nav" aria-label="メインメニュー">
          {navItems.map((item) => (
            <a href={item.href} key={item.href}>
              <span className="nav-icon" aria-hidden="true">
                {item.icon}
              </span>
              <span>{item.label}</span>
              <small>{item.en}</small>
            </a>
          ))}
        </nav>

        <details className="mobile-menu">
          <summary aria-label="メニューを開く">
            <span />
            <span />
          </summary>
          <nav aria-label="モバイルメニュー">
            {navItems.map((item) => (
              <a href={item.href} key={item.href}>
                {item.label}
                <small>{item.en}</small>
              </a>
            ))}
          </nav>
        </details>
      </header>

      <section className="hero" id="top">
        <div className="hero-sun" aria-hidden="true" />
        <span className="float-shape shape-one" aria-hidden="true">
          ✦
        </span>
        <span className="float-shape shape-two" aria-hidden="true">
          ◌
        </span>
        <div className="hero-sparkles" aria-hidden="true">
          <span className="twinkle twinkle-one">✦</span>
          <span className="twinkle twinkle-two">✧</span>
          <span className="twinkle twinkle-three">✦</span>
          <span className="twinkle twinkle-four">•</span>
        </div>

        <div className="hero-friends" aria-hidden="true">
          <div className="mini-friend friend-coral">
            <i />
            <span />
          </div>
          <div className="mini-friend friend-yellow">
            <i />
            <span />
          </div>
          <div className="mini-friend friend-mint">
            <i />
            <span />
          </div>
        </div>

        <div className="hero-copy">
          <p className="eyebrow">
            <span>HELLO, NEW AMOUR TOWA</span>
          </p>
          <h1>
            やさしさが、
            <br />
            <em>まちの未来</em>をつくる。
          </h1>
          <p className="hero-lead">
            食からはじまった、地域への想い。
            <br />
            これからも人と暮らしに寄り添いながら、
            <br className="desktop-only" />
            新しい「うれしい」を育てていきます。
          </p>
          <a className="primary-button" href="#about">
            <span>
              私たちについて
              <small>ABOUT US</small>
            </span>
            <i aria-hidden="true">→</i>
          </a>
        </div>

        <div className="hero-note" aria-hidden="true">
          <span>SCROLL</span>
          <i />
        </div>
      </section>

      <div className="wave-divider" aria-hidden="true">
        <span />
      </div>

      <section className="opening" id="about">
        <div className="opening-heading">
          <p>OUR STORY</p>
          <h2>
            まちと一緒に、
            <br />
            変わりつづける会社です。
          </h2>
        </div>
        <div className="story-layout">
          <div className="story-art" aria-hidden="true">
            <div className="story-orbit">
              <span className="story-house">⌂</span>
              <i />
              <i />
              <i />
            </div>
            <span className="story-label">SINCE 1990 / ADACHI, TOKYO</span>
          </div>
          <div className="story-copy">
            <span className="mini-title">地域から生まれた、地域の会社。</span>
            <p>
              アモールトーワは、東和銀座商店街の店主たちの
              「自分たちのまちを、もっと良くしたい」という想いから
              1990年に生まれました。
            </p>
            <p>
              時代とともに役割や事業が変わっても、変わらないもの。
              それは、目の前の人の暮らしを想い、地域の未来に
              小さな“うれしい”を増やしていくことです。
            </p>
            <a className="text-link" href="#profile">
              会社について詳しく見る <span>↗</span>
            </a>
          </div>
        </div>
        <div className="number-strip" aria-label="会社データ">
          <div>
            <small>FOUNDING</small>
            <strong>1990</strong>
            <span>年設立</span>
          </div>
          <div>
            <small>MEMBERS</small>
            <strong>130</strong>
            <span>名の仲間</span>
          </div>
          <div>
            <small>HOME</small>
            <strong>足立区</strong>
            <span>東和から</span>
          </div>
        </div>
      </section>

      <section className="business-section" id="business">
        <span className="section-doodle doodle-left" aria-hidden="true">
          ✦
        </span>
        <span className="section-doodle doodle-right" aria-hidden="true">
          ◌
        </span>
        <div className="section-heading">
          <p>WHAT WE VALUE</p>
          <h2>
            わたしたちが、
            <br />
            大切にしていること。
          </h2>
          <span>事業が変わっても、変わらない3つのまなざし。</span>
        </div>

        <div className="value-cards">
          <article className="value-card value-coral">
            <div className="card-number">01</div>
            <div className="card-symbol" aria-hidden="true">
              <span>☺</span>
            </div>
            <p>FOR PEOPLE</p>
            <h3>人に、寄り添う。</h3>
            <span>
              ひとりひとりの声に耳を傾け、安心と笑顔につながる仕事を。
            </span>
          </article>
          <article className="value-card value-green">
            <div className="card-number">02</div>
            <div className="card-symbol" aria-hidden="true">
              <span>⌂</span>
            </div>
            <p>FOR COMMUNITY</p>
            <h3>まちと、育てる。</h3>
            <span>
              地域の人たちと手を取り合い、必要とされる価値を育てます。
            </span>
          </article>
          <article className="value-card value-blue">
            <div className="card-number">03</div>
            <div className="card-symbol" aria-hidden="true">
              <span>✦</span>
            </div>
            <p>FOR TOMORROW</p>
            <h3>未来へ、つなぐ。</h3>
            <span>
              これまでの経験を活かしながら、新しい可能性に挑戦します。
            </span>
          </article>
        </div>

        <div className="business-message">
          <div className="peek-friend" aria-hidden="true">
            <i />
            <span />
          </div>
          <span className="message-star message-star-one" aria-hidden="true">
            ✦
          </span>
          <span className="message-star message-star-two" aria-hidden="true">
            ✧
          </span>
          <span className="message-badge">NEW CHAPTER</span>
          <p>
            アモールトーワは今、
            <br />
            次のステージへ向けて準備中です。
          </p>
          <a href="#contact">新しい取り組みについて相談する <i>→</i></a>
        </div>
      </section>

      <section className="news-section" id="news">
        <div className="news-heading">
          <p>NEWS &amp; TOPICS</p>
          <h2>アモール便り</h2>
          <span>わたしたちの今と、これから。</span>
        </div>
        <div className="news-list">
          <a
            href="https://amourtowa.co.jp/2026/01/05/%E3%83%9B%E3%83%BC%E3%83%A0%E3%83%9A%E3%83%BC%E3%82%B8%E3%82%92%E3%83%AA%E3%83%8B%E3%83%A5%E3%83%BC%E3%82%A2%E3%83%AB%E3%81%97%E3%81%BE%E3%81%97%E3%81%9F%E3%80%82/"
            aria-label="ホームページをリニューアルしました"
          >
            <time dateTime="2026-01-05">2026.01.05</time>
            <span className="news-category">お知らせ</span>
            <strong>ホームページをリニューアルしました。</strong>
            <i>↗</i>
          </a>
          <div className="news-coming">
            <span>COMING SOON</span>
            <p>新しいお知らせを、ここから。</p>
          </div>
        </div>
      </section>

      <section className="recruit-section" id="recruit">
        <div className="recruit-art" aria-hidden="true">
          <div className="person person-one">
            <i />
            <span />
          </div>
          <div className="person person-two">
            <i />
            <span />
          </div>
          <div className="person person-three">
            <i />
            <span />
          </div>
          <span className="recruit-spark spark-a">✦</span>
          <span className="recruit-spark spark-b">・</span>
        </div>
        <div className="recruit-copy">
          <p>JOIN OUR TEAM</p>
          <h2>
            変化を楽しめる人と、
            <br />
            次のアモールトーワへ。
          </h2>
          <span>
            やさしさも、アイデアも、立派な才能です。
            <br />
            地域の未来を一緒につくる仲間を待っています。
          </span>
          <a className="primary-button recruit-button" href="#contact">
            <span>
              採用情報を見る
              <small>CAREERS</small>
            </span>
            <i aria-hidden="true">→</i>
          </a>
        </div>
      </section>

      <section className="profile-section" id="profile">
        <div className="profile-heading">
          <p>COMPANY PROFILE</p>
          <h2>会社概要</h2>
        </div>
        <dl>
          <div>
            <dt>会社名</dt>
            <dd>株式会社アモールトーワ</dd>
          </div>
          <div>
            <dt>設立</dt>
            <dd>1990年6月</dd>
          </div>
          <div>
            <dt>代表者</dt>
            <dd>代表取締役　細谷 武司</dd>
          </div>
          <div>
            <dt>所在地</dt>
            <dd>東京都足立区東和2丁目9番11号</dd>
          </div>
          <div>
            <dt>従業員数</dt>
            <dd>130名</dd>
          </div>
        </dl>
      </section>

      <section className="contact-section" id="contact">
        <div className="contact-cloud cloud-one" aria-hidden="true" />
        <div className="contact-cloud cloud-two" aria-hidden="true" />
        <span className="contact-bird bird-one" aria-hidden="true">
          ︿
        </span>
        <span className="contact-bird bird-two" aria-hidden="true">
          ︿
        </span>
        <div className="contact-friend" aria-hidden="true">
          <i />
          <span />
        </div>
        <div className="contact-inner">
          <p>CONTACT US</p>
          <h2>
            いっしょに、
            <br />
            新しい未来の話を。
          </h2>
          <span>ご相談・お問い合わせは、お気軽にどうぞ。</span>
          <div className="contact-actions">
            <a
              className="mail-button"
              href="https://amourtowa.co.jp/contact/"
            >
              <span>
                お問い合わせフォーム
                <small>WEB CONTACT</small>
              </span>
              <i>→</i>
            </a>
            <a className="phone-link" href="tel:0336064664">
              <small>お電話でのお問い合わせ</small>
              <strong>03-3606-4664</strong>
            </a>
          </div>
        </div>
      </section>

      <footer>
        <div className="footer-top">
          <a className="brand footer-brand" href="#top">
            <span className="brand-mark" aria-hidden="true">
              <i />
              <i />
              <i />
            </span>
            <span className="brand-name">
              <b>AMOUR TOWA</b>
              <small>株式会社アモールトーワ</small>
            </span>
          </a>
          <p>
            〒120-0003
            <br />
            東京都足立区東和2丁目9番11号
          </p>
          <nav aria-label="フッターメニュー">
            {navItems.slice(0, 4).map((item) => (
              <a href={item.href} key={item.href}>
                {item.label}
              </a>
            ))}
          </nav>
        </div>
        <div className="footer-bottom">
          <a href="https://amourtowa.co.jp/privacy/">
            プライバシーポリシー
          </a>
          <small>© AMOUR TOWA ALL RIGHTS RESERVED.</small>
          <a className="back-top" href="#top">
            PAGE TOP ↑
          </a>
        </div>
      </footer>
    </main>
  );
}
