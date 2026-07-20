import { Link } from 'react-router-dom';
import LinkedInIcon from './LinkedInIcon';

interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  linkedin?: string;
}

interface TeamMemberCardProps {
  member: TeamMember;
  fixedWidth?: boolean;
}

export default function TeamMemberCard({ member, fixedWidth = false }: TeamMemberCardProps) {
  return (
    <Link
      to={`/team/${member.id}`}
      className={`tm-card group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 block ${fixedWidth ? 'w-[280px]' : ''}`}
    >
      <div className="aspect-[3/4] overflow-hidden bg-gray-50">
        <img
          loading="lazy"
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
        />
      </div>
      <div className="p-6 text-center border-t-4 border-brand-green">
        <h3 className="text-brand-green font-bold text-lg uppercase tracking-wide mb-1">{member.name}</h3>
        <div className="flex items-center justify-center mb-2">
          <div className="w-2 h-2 bg-brand-green rotate-45"></div>
        </div>
        <p className="text-gray-500 text-sm uppercase tracking-widest text-center mb-4">{member.role}</p>
        {member.linkedin ? (
          <LinkedInIcon href={member.linkedin} />
        ) : (
          <div className="w-11 h-11"></div>
        )}
      </div>
    </Link>
  );
}
