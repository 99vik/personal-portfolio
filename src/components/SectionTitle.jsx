import PropTypes from 'prop-types';

function SectionTitle({ title }) {
  return (
    <>
      <div className="flex items-center">
        <div className="h-[1px] mt-3 mr-5 flex-1 bg-gradient-to-r from-emerald-900 to bg-emerald-400"></div>
        <h1 className="text-emerald-400 text-3xl font-semibold">{title}</h1>
        <div className="h-[1px] mt-3 ml-5 flex-1 bg-gradient-to-r from-emerald-400 to bg-emerald-300"></div>
      </div>
    </>
  );
}

SectionTitle.propTypes = {
  title: PropTypes.string,
};

export default SectionTitle;
