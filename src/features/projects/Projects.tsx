import { useState } from 'react';
import Section from '../../components/layout/Section';
import { Star, GitFork, Github } from 'lucide-react';
import { useGitHubRepos } from '../../hooks/useGitHubRepos';

export default function Projects() {
  const { repos, loading, error } = useGitHubRepos('owariz');
  const [currentPage, setCurrentPage] = useState(1);
  const reposPerPage = 6;

  // Pagination logic
  const indexOfLastRepo = currentPage * reposPerPage;
  const indexOfFirstRepo = indexOfLastRepo - reposPerPage;
  const currentRepos = repos.slice(indexOfFirstRepo, indexOfLastRepo);
  const totalPages = Math.ceil(repos.length / reposPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <Section title="ผลงาน">
      {loading && <p className='text-center'>Loading projects...</p>}
      {error && <p className="text-red-500 text-center">{error}</p>}
      {!loading && !error && (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 min-h-[450px]">
            {currentRepos.map((repo) => (
              <a 
                key={repo.id} 
                href={repo.html_url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="block p-4 border border-gray-200 rounded-md overflow-hidden transition-shadow hover:shadow-md hover:border-rose-200"
              >
                <h4 className="font-bold mb-2 truncate">{repo.name}</h4>
                <p className="text-gray-600 mb-3 text-sm h-10 overflow-hidden">{repo.description || 'No description available.'}</p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                          <Star size={16} />
                          <span>{repo.stargazers_count}</span>
                      </div>
                      <div className="flex items-center gap-1">
                          <GitFork size={16} />
                          <span>{repo.forks_count}</span>
                      </div>
                  </div>
                  {repo.language && (
                    <span className="px-2 py-1 text-xs text-white bg-rose-400 rounded-full">
                      {repo.language}
                    </span>
                  )}
                </div>
              </a>
            ))}
          </div>

          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-4 mt-6">
              <button 
                onClick={handlePrevPage} 
                disabled={currentPage === 1}
                className="px-4 py-2 text-sm font-semibold text-white bg-gray-600 rounded-md disabled:bg-gray-300 disabled:cursor-not-allowed hover:cursor-pointer"
              >
                Previous
              </button>
              <span className="text-gray-600">
                Page {currentPage} of {totalPages}
              </span>
              <button 
                onClick={handleNextPage} 
                disabled={currentPage === totalPages}
                className="px-4 py-2 text-sm font-semibold text-white bg-gray-600 rounded-md disabled:bg-gray-300 disabled:cursor-not-allowed hover:cursor-pointer"
              >
                Next
              </button>
            </div>
          )}
        </>
      )}
      <div className="text-center mt-6">
        <a 
          href="https://github.com/owariz?tab=repositories" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-gray-800 rounded-md hover:bg-gray-900"
        >
          <Github size={16} />
          View All on GitHub
        </a>
      </div>
    </Section>
  );
}