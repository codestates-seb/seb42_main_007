import Cookies from 'js-cookie';

async function getDisplayName() {
  try {
    const response = await fetch('http://43.201.167.13:8080/members', {
      headers: {
        Authorization: `Bearer: ${Cookies.get('accessToken')}`, // 저장된 토큰 가져오기
      },
    });
    if (!response.ok) {
      throw new Error('Failed to get display name');
    }

    const data = await response.json();
    return data.displayName;
  } catch (error) {
    console.error(error);
  }
}

export default getDisplayName;