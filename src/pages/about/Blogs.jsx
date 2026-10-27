import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import {
  Calendar,
  Clock,
  ArrowRight,
  Search,
  BookOpen,
  Tag,
  CheckCircle2,
  X,
  Share2,
  Sparkles,
} from 'lucide-react';
import useDocumentTitle from '../../hooks/useDocumentTitle';
import { blogCategories, featuredBlog, blogPosts } from '../../data/blogs';

export default function Blogs() {
  useDocumentTitle(
    'Blogs & Geospatial Insights',
    'Read articles and technical perspectives on Earth observation, satellite remote sensing, WebGIS, and spatial intelligence.'
  );

  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeArticle, setActiveArticle] = useState(null);
  const [copiedId, setCopiedId] = useState(null);

  // Filtered list
  const filteredPosts = useMemo(() => {
    return blogPosts.filter((post) => {
      const matchesCategory =
        selectedCategory === 'All' || post.category === selectedCategory;
      const query = searchQuery.trim().toLowerCase();
      const matchesSearch =
        !query ||
        post.title.toLowerCase().includes(query) ||
        post.excerpt.toLowerCase().includes(query) ||
        post.author.name.toLowerCase().includes(query) ||
        post.tags.some((tag) => tag.toLowerCase().includes(query));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const handleShare = (post) => {
    const url = window.location.href.split('#')[0];
    if (navigator.clipboard) {
      navigator.clipboard.writeText(`${url}#${post.slug}`);
      setCopiedId(post.id);
      setTimeout(() => setCopiedId(null), 2500);
    }
  };

  return (
    <div className="space-y-10 animate-fade-in">
      {/* Featured Header Card */}
      <div className="p-8 sm:p-10 rounded-2xl bg-[#cce5f5] text-slate-900 shadow-sm border border-[#83c9d7]">
        <span className="text-xs font-extrabold uppercase tracking-wider text-slate-800 bg-white/40 px-3 py-1 rounded-md inline-block mb-3">
          Thought Leadership & Research Insights
        </span>
        <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-950 font-heading">
          Geospatial Intelligence, Earth Observation & Tech Perspectives
        </h2>
        <p className="mt-3 text-slate-900 font-medium text-base sm:text-lg leading-relaxed max-w-3xl">
          Explore technical articles, field methodologies, and deep-dive engineering perspectives from our GIS specialists, satellite data engineers, and spatial architects.
        </p>
      </div>

      {/* Featured Flagship Article */}
      <section className="space-y-4">
        <div className="flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-[#005b94]" />
          <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wider font-heading">
            Featured Editorial
          </h3>
        </div>

        <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:border-[#005b94]/60 hover:shadow-md transition-all group">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-[#005b94] bg-cyan-50 border border-cyan-100 px-3 py-1 rounded-full uppercase tracking-wider">
                {featuredBlog.category}
              </span>
              <span className="text-xs font-semibold text-slate-500 flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                {featuredBlog.readTime}
              </span>
            </div>
            <div className="flex items-center gap-2 text-xs font-medium text-slate-500">
              <Calendar className="w-3.5 h-3.5 text-slate-400" />
              <span>{featuredBlog.date}</span>
            </div>
          </div>

          <h3
            onClick={() => setActiveArticle(featuredBlog)}
            className="text-xl sm:text-2xl font-extrabold text-slate-900 group-hover:text-[#005b94] transition-colors cursor-pointer leading-snug"
          >
            {featuredBlog.title}
          </h3>

          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            {featuredBlog.excerpt}
          </p>

          {/* Bullet highlights */}
          <div className="my-5 p-4 rounded-xl bg-slate-50 border border-slate-100 space-y-2">
            {featuredBlog.highlights.map((h, i) => (
              <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-[#005b94] shrink-0 mt-0.5" />
                <span>{h}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-100">
            {/* Author */}
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[#005b94] text-white flex items-center justify-center font-bold text-xs shadow-xs">
                {featuredBlog.author.initials}
              </div>
              <div>
                <div className="text-xs font-bold text-slate-900">
                  {featuredBlog.author.name}
                </div>
                <div className="text-[11px] text-slate-500">
                  {featuredBlog.author.role}
                </div>
              </div>
            </div>

            {/* Read Button */}
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => handleShare(featuredBlog)}
                className="p-2 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
                title="Share article link"
              >
                <Share2 className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => setActiveArticle(featuredBlog)}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#005b94] hover:bg-[#004a7c] text-white text-xs font-bold transition-all shadow-xs cursor-pointer"
              >
                <span>Read Full Article</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Filter and Search Bar */}
      <section className="space-y-4 pt-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-heading">
              All Articles & Research Notes
            </h3>
            <p className="text-slate-600 text-xs sm:text-sm mt-0.5">
              Browse through our spatial engineering guides, methodologies, and technical publications.
            </p>
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search blogs, topics, authors..."
              className="w-full pl-9 pr-8 py-2 rounded-xl text-xs sm:text-sm border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#005b94]/20 focus:border-[#005b94] transition-all bg-white"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-0.5"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Categories Chips */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none">
          {blogCategories.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`whitespace-nowrap px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-slate-900 text-white shadow-xs'
                    : 'bg-slate-100 text-slate-600 hover:text-slate-900 hover:bg-slate-200/80'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </section>

      {/* Articles Grid */}
      <section className="space-y-4">
        {filteredPosts.length === 0 ? (
          <div className="p-12 text-center rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
            <BookOpen className="w-8 h-8 text-slate-400 mx-auto" />
            <h4 className="text-base font-bold text-slate-800">
              No articles found
            </h4>
            <p className="text-xs sm:text-sm text-slate-500 max-w-sm mx-auto">
              We couldn&apos;t find any blog posts matching your search or filter. Try a different keyword or reset filters.
            </p>
            <button
              type="button"
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
              }}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-slate-900 text-white text-xs font-bold hover:bg-slate-800 transition-colors"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredPosts.map((post) => (
              <div
                key={post.id}
                className="p-6 sm:p-7 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:border-[#005b94] hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-bold text-[#005b94] bg-cyan-50 border border-cyan-100 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                      {post.category}
                    </span>
                    <span className="text-xs text-slate-400 flex items-center gap-1 font-medium">
                      <Clock className="w-3.5 h-3.5" />
                      {post.readTime}
                    </span>
                  </div>

                  <h4
                    onClick={() => setActiveArticle(post)}
                    className="text-lg font-bold text-slate-900 group-hover:text-[#005b94] transition-colors cursor-pointer leading-snug line-clamp-2"
                  >
                    {post.title}
                  </h4>

                  <p className="text-slate-600 text-xs sm:text-sm mt-2 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap items-center gap-1.5 mt-4">
                    {post.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[11px] font-medium text-slate-600 bg-slate-100 px-2 py-0.5 rounded-md flex items-center gap-1"
                      >
                        <Tag className="w-2.5 h-2.5 text-slate-400" />
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-full bg-slate-100 text-[#005b94] font-bold text-[11px] flex items-center justify-center border border-slate-200">
                      {post.author.initials}
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-slate-800">
                        {post.author.name}
                      </div>
                      <div className="text-[10px] text-slate-400">
                        {post.date}
                      </div>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => setActiveArticle(post)}
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#005b94] group-hover:translate-x-0.5 transition-transform cursor-pointer"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Collaborate or Guest Write Callout */}
      <section className="pt-6 border-t border-slate-200">
        <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-lg font-bold text-slate-900 font-heading">
              Have a Research Paper or Geospatial Case Study?
            </h4>
            <p className="text-slate-600 text-xs sm:text-sm max-w-xl">
              We collaborate with researchers, government surveyors, and geospatial engineers to share impactful findings with the broader community.
            </p>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-5 py-2.5 rounded-xl bg-slate-950 hover:bg-slate-800 text-white text-xs font-bold uppercase tracking-wider transition-all shadow-sm shrink-0"
          >
            Submit an Article
          </Link>
        </div>
      </section>

      {/* Article Detail Modal / Reader */}
      {activeArticle && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 backdrop-blur-xs p-4 sm:p-6 overflow-y-auto animate-fade-in"
          onClick={() => setActiveArticle(null)}
        >
          <div
            className="bg-white w-full max-w-3xl rounded-2xl shadow-2xl border border-slate-200 max-h-[90vh] overflow-y-auto p-6 sm:p-8 space-y-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <span className="text-xs font-bold text-[#005b94] bg-cyan-50 border border-cyan-100 px-3 py-1 rounded-full uppercase tracking-wider">
                {activeArticle.category}
              </span>
              <button
                type="button"
                onClick={() => setActiveArticle(null)}
                className="p-1 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading leading-tight">
                {activeArticle.title}
              </h3>
              <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-slate-400" />
                  {activeArticle.date}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-slate-400" />
                  {activeArticle.readTime}
                </span>
                <span className="text-slate-300">·</span>
                <span className="font-medium text-slate-700">
                  By {activeArticle.author.name} ({activeArticle.author.role})
                </span>
              </div>
            </div>

            <div className="prose prose-slate max-w-none text-slate-700 text-sm sm:text-base leading-relaxed space-y-4">
              <p className="font-medium text-slate-800 bg-slate-50 p-4 rounded-xl border border-slate-200/80">
                {activeArticle.excerpt}
              </p>
              <p>{activeArticle.summary}</p>

              {activeArticle.highlights && (
                <div className="space-y-2 pt-2">
                  <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
                    Core Technical Findings & Highlights
                  </h4>
                  <ul className="space-y-2">
                    {activeArticle.highlights.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-[#005b94] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <div className="flex flex-wrap items-center gap-2 pt-2">
              {activeArticle.tags.map((t, idx) => (
                <span
                  key={idx}
                  className="text-xs font-semibold text-slate-600 bg-slate-100 px-2.5 py-1 rounded-md"
                >
                  #{t}
                </span>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-slate-100">
              <button
                type="button"
                onClick={() => handleShare(activeArticle)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl border border-slate-200 text-slate-700 text-xs font-bold hover:bg-slate-50 transition-colors cursor-pointer"
              >
                <Share2 className="w-4 h-4" />
                <span>{copiedId === activeArticle.id ? 'Link Copied!' : 'Share Article Link'}</span>
              </button>

              <div className="w-full sm:w-auto flex items-center gap-2">
                <Link
                  to="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-5 py-2.5 rounded-xl bg-[#005b94] hover:bg-[#004a7c] text-white text-xs font-bold transition-colors shadow-xs"
                >
                  Discuss with Authors
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
