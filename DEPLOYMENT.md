# Aurora Labs - Deployment Guide

## GitHub Pages Deployment (Active)

This site is configured for automatic deployment to GitHub Pages.

### Live URL
Once enabled, your site will be available at:
**https://adityavc19.github.io/thegame/**

### Setup Instructions

1. **Enable GitHub Pages** (One-time setup):
   - Go to: https://github.com/adityavc19/thegame/settings/pages
   - Under "Build and deployment":
     - Source: Select **GitHub Actions**
   - Click Save

2. **Automatic Deployment**:
   - Every push to `main` branch automatically deploys
   - Check deployment status: https://github.com/adityavc19/thegame/actions

3. **Manual Deployment**:
   - Go to: https://github.com/adityavc19/thegame/actions
   - Select "Deploy to GitHub Pages" workflow
   - Click "Run workflow"

### Deployment Status

Check your deployment status:
- **Actions**: https://github.com/adityavc19/thegame/actions
- **Environments**: https://github.com/adityavc19/thegame/deployments

### Custom Domain (Optional)

To use a custom domain:
1. Go to repository settings → Pages
2. Add your custom domain
3. Configure DNS records with your domain provider:
   ```
   CNAME record: www.yourdomain.com → adityavc19.github.io
   A records for apex domain:
   185.199.108.153
   185.199.109.153
   185.199.110.153
   185.199.111.153
   ```

### Testing Locally

Before deploying, test locally:
```bash
cd aurora-labs-prototype
python3 -m http.server 8000
# Visit http://localhost:8000
```

### Troubleshooting

**Deployment fails:**
- Check Actions tab for error logs
- Ensure repository is public or GitHub Pages is enabled for private repos
- Verify permissions in repository settings

**Site shows 404:**
- Wait 2-3 minutes after first deployment
- Check that GitHub Pages source is set to "GitHub Actions"
- Verify deployment completed successfully in Actions tab

**CSS/JS not loading:**
- Check browser console for errors
- Verify all asset paths are relative (no absolute paths)
- Clear browser cache

### Alternative Deployment Options

#### Vercel
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
cd aurora-labs-prototype
vercel
```

#### Netlify
```bash
# Install Netlify CLI
npm i -g netlify-cli

# Deploy
cd aurora-labs-prototype
netlify deploy --prod
```

---

**Last Updated**: January 2026
**Repository**: https://github.com/adityavc19/thegame
