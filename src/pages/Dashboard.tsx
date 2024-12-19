import { Layout } from '../components/Layout';
import { RepositoryList } from '../components/RepositoryList';

export function Dashboard() {
  return (
    <Layout>
      <div className="flex-1">
        <RepositoryList />
      </div>
    </Layout>
  );
}