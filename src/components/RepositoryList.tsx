import React, { useState, useEffect } from 'react';
import { RefreshCcw, Plus, Search } from 'lucide-react';
import { Button } from './common/Button';

interface Repository {
  id: string;
  name: string;
  language: string;
  size: string;
  visibility: 'Public' | 'Private';
  updatedAt: string;
}

const STORAGE_KEY = 'repositories';

const initialRepositories: Repository[] = [
  {
    id: '1',
    name: 'design-system',
    language: 'React',
    size: '7320 KB',
    visibility: 'Public',
    updatedAt: '1 day ago'
  },
  {
    id: '2',
    name: 'codeant-ci-app',
    language: 'Javascript',
    size: '5871 KB',
    visibility: 'Private',
    updatedAt: '2 days ago'
  },
  {
    id: '3',
    name: 'analytics-dashboard',
    language: 'Python',
    size: '4521 KB',
    visibility: 'Private',
    updatedAt: '5 days ago'
  },
  {
    id: '4',
    name: 'mobile-app',
    language: 'Swift',
    size: '3096 KB',
    visibility: 'Public',
    updatedAt: '3 days ago'
  },
  {
    id: '5',
    name: 'e-commerce-platform',
    language: 'Java',
    size: '6210 KB',
    visibility: 'Private',
    updatedAt: '6 days ago'
  },
  {
    id: '6',
    name: 'blog-website',
    language: 'HTML/CSS',
    size: '1876 KB',
    visibility: 'Public',
    updatedAt: '4 days ago'
  },
  {
    id: '7',
    name: 'social-network',
    language: 'PHP',
    size: '5432 KB',
    visibility: 'Private',
    updatedAt: '7 days ago'
  }
];

const getInitialRepositories = (): Repository[] => {
  const stored = localStorage.getItem(STORAGE_KEY);
  return stored ? JSON.parse(stored) : initialRepositories;
};

export function RepositoryList() {
  const [repositories, setRepositories] = useState<Repository[]>(getInitialRepositories);
  const [searchTerm, setSearchTerm] = useState('');
  const [showAddModal, setShowAddModal] = useState(false);
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [newRepo, setNewRepo] = useState({
    name: '',
    language: '',
    visibility: 'Public' as const
  });

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  useEffect(() => {
    try {
      if (isOnline) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(repositories));
      }
    } catch (error) {
      console.error('Error saving to localStorage:', error);
    }
  }, [repositories, isOnline]);

  const handleRefresh = () => {
    if (!isOnline) {
      return;
    }

    try {
      setRepositories(repos => 
        repos.map(repo => ({
          ...repo,
          updatedAt: `${Math.floor(Math.random() * 7) + 1} days ago`
        }))
      );
    } catch (error) {
      console.error('Error refreshing repositories:', error);
    }
  };

  const handleAddRepository = () => {
    if (!isOnline) {
      return;
    }

    if (newRepo.name && newRepo.language) {
      try {
        const repository: Repository = {
          id: Date.now().toString(),
          name: newRepo.name,
          language: newRepo.language,
          size: '0 KB',
          visibility: newRepo.visibility,
          updatedAt: 'Just now'
        };

        setRepositories(prev => [repository, ...prev]);
        setNewRepo({ name: '', language: '', visibility: 'Public' });
        setShowAddModal(false);
      } catch (error) {
        console.error('Error adding repository:', error);
      }
    }
  };

  const filteredRepositories = repositories.filter(repo =>
    repo.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    repo.language.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-8">
      {!isOnline && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4 text-center">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
                <svg 
                  className="w-8 h-8 text-red-500" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M18.364 5.636a9 9 0 010 12.728m0 0l-2.829-2.829m2.829 2.829L21 21M15.536 8.464a5 5 0 010 7.072m0 0l-2.829-2.829m-4.243 2.829a4.978 4.978 0 01-1.414-2.83m-1.414 5.658a9 9 0 01-2.167-9.238m7.824 2.167a1 1 0 111.414 1.414m-1.414-1.414L3 3" 
                  />
                </svg>
              </div>
              <h2 className="text-lg font-semibold mb-2">No Internet Connection</h2>
              <p className="text-gray-600 mb-4 text-sm">
                Please check your internet connection and try again.
              </p>
              <Button 
                onClick={() => window.location.reload()}
                variant="primary"
                className="w-full sm:w-auto"
              >
                Retry Connection
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Header Section - Responsive Layout */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 lg:gap-0 mb-6">
        <div>
          <h1 className="text-2xl font-semibold mb-1">Repositories</h1>
          <p className="text-gray-600">{repositories.length} total repositories</p>
        </div>
        <div className="flex gap-3">
          <Button 
            onClick={handleRefresh}
            variant="outline"
            className="flex items-center gap-2 text-gray-700 border border-gray-200"
          >
            <RefreshCcw className="w-4 h-4" />
            Refresh All
          </Button>
          <Button 
            onClick={() => setShowAddModal(true)}
            variant="primary"
            className="flex items-center gap-2 bg-blue-600 text-white"
          >
            <Plus className="w-4 h-4" />
            Add Repository
          </Button>
        </div>
      </div>

      {/* Search Bar */}
      <div className="relative mb-6">
        <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          placeholder="Search Repositories"
          className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Add Repository Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <h2 className="text-xl font-semibold mb-4">Add New Repository</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Repository Name</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500"
                  value={newRepo.name}
                  onChange={(e) => setNewRepo(prev => ({ ...prev, name: e.target.value }))}
                  placeholder="e.g., my-awesome-project"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Language</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500"
                  value={newRepo.language}
                  onChange={(e) => setNewRepo(prev => ({ ...prev, language: e.target.value }))}
                  placeholder="e.g., JavaScript"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Visibility</label>
                <select
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500"
                  value={newRepo.visibility}
                  onChange={(e) => setNewRepo(prev => ({ ...prev, visibility: e.target.value as 'Public' | 'Private' }))}
                >
                  <option value="Public">Public</option>
                  <option value="Private">Private</option>
                </select>
              </div>
            </div>
            <div className="flex justify-end gap-3 mt-6">
              <Button 
                onClick={() => setShowAddModal(false)}
                variant="outline"
              >
                Cancel
              </Button>
              <Button 
                onClick={handleAddRepository}
                variant="primary"
                disabled={!newRepo.name || !newRepo.language}
              >
                Add Repository
              </Button>
            </div>
          </div>
        </div>
      )}

      <div className="space-y-4">
        {filteredRepositories.map((repo) => (
          <div key={repo.id} className="border-b pb-4">
            <div className="flex items-center gap-2 mb-1">
              <span className="font-medium hover:text-blue-600 cursor-pointer">
                {repo.name}
              </span>
              <span className={`text-sm px-2 py-0.5 rounded-full ${
                repo.visibility === 'Public' ? 'bg-blue-100 text-blue-700' : 'bg-gray-100 text-gray-700'
              }`}>
                {repo.visibility}
              </span>
            </div>
            <div className="flex items-center gap-4 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                <span>{repo.language}</span>
              </div>
              <span>{repo.size}</span>
              <span>Updated {repo.updatedAt}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}